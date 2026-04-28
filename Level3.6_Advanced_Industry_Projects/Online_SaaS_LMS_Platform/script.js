import { auth } from './modules/auth.js';
import { api } from './modules/api.js';
import { $ } from './modules/utils.js';
import { toast, renderStats, renderRows, renderLogs, renderInsights, drawChart } from './modules/ui.js';

let state = { records: [], logs: [], page: 1, pageSize: 5, chart: null };

async function boot() {
  await api.seed();
  const page = location.pathname.split('/').pop();
  if (page === 'login.html') bindAuthPage();
  if (page === 'dashboard.html') bindDashboard();
}

function bindAuthPage() {
  if (auth.current()) location.href = 'dashboard.html';
  $('#loginForm').addEventListener('submit', event => {
    event.preventDefault();
    const result = auth.login($('#loginEmail').value, $('#loginPassword').value);
    if (!result.ok) return toast(result.message, 'error');
    toast('Login successful');
    setTimeout(() => location.href = 'dashboard.html', 400);
  });
  $('#signupForm').addEventListener('submit', event => {
    event.preventDefault();
    const result = auth.signup({
      name: $('#signupName').value,
      email: $('#signupEmail').value,
      password: $('#signupPassword').value,
      role: $('#signupRole').value
    });
    toast(result.message, result.ok ? 'success' : 'error');
    if (result.ok) event.target.reset();
  });
}

async function bindDashboard() {
  const user = auth.requireUser();
  $('#userBadge').textContent = `${user.name} (${user.role})`;
  $('#logoutBtn').addEventListener('click', () => { auth.logout(); location.href = 'login.html'; });
  $('#searchInput').addEventListener('input', () => { state.page = 1; refresh(); });
  $('#statusFilter').addEventListener('change', () => { state.page = 1; refresh(); });
  $('#prevPage').addEventListener('click', () => { state.page = Math.max(1, state.page - 1); refresh(); });
  $('#nextPage').addEventListener('click', () => { state.page += 1; refresh(); });
  $('#recordForm').addEventListener('submit', saveRecord);
  fillStatuses();
  await load();
  setInterval(simulateRealtime, 8000);
}

function fillStatuses() {
  const options = window.projectConfig.statuses.map(status => `<option>${status}</option>`).join('');
  $('#statusFilter').innerHTML = '<option>All</option>' + options;
  $('#recordStatus').innerHTML = options;
}

async function load() {
  state.records = await api.records.list();
  state.logs = await api.logs.list();
  refresh();
}

function filteredRecords() {
  const user = auth.current();
  const term = $('#searchInput').value.toLowerCase();
  const status = $('#statusFilter').value;
  return state.records.filter(record => {
    const allowed = user.role !== 'User' || record.owner === user.email;
    const matches = Object.values(record).join(' ').toLowerCase().includes(term);
    const statusOk = status === 'All' || record.status === status;
    return allowed && matches && statusOk;
  });
}

function refresh() {
  const records = filteredRecords();
  const totalPages = Math.max(1, Math.ceil(records.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const visible = records.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
  renderStats(records, auth.current());
  renderRows(visible, auth.current(), editRecord, deleteRecord);
  renderInsights(records);
  renderLogs(state.logs.slice(0, 8));
  $('#pageInfo').textContent = `Page ${state.page} of ${totalPages}`;
  state.chart = drawChart(state.chart, records);
}

async function saveRecord(event) {
  event.preventDefault();
  const id = $('#editId').value;
  const payload = {
    field1: $('#field1').value.trim(),
    field2: $('#field2').value.trim(),
    field3: $('#field3').value.trim(),
    status: $('#recordStatus').value
  };
  if (id) await api.records.update(id, payload, auth.current());
  else await api.records.create(payload, auth.current());
  toast(id ? 'Record updated' : 'Record created');
  $('#recordForm').reset();
  $('#editId').value = '';
  $('#formTitle').textContent = 'Create ' + window.projectConfig.entity;
  await load();
}

function editRecord(record) {
  $('#editId').value = record.id;
  $('#field1').value = record.field1;
  $('#field2').value = record.field2;
  $('#field3').value = record.field3;
  $('#recordStatus').value = record.status;
  $('#formTitle').textContent = 'Edit ' + window.projectConfig.entity;
}

async function deleteRecord(record) {
  if (!confirm('Delete this record?')) return;
  await api.records.remove(record.id, auth.current());
  toast('Record deleted');
  await load();
}

async function simulateRealtime() {
  const sample = state.records[Math.floor(Math.random() * state.records.length)];
  if (!sample || !auth.current()) return;
  await api.logs.add('Realtime mock sync processed ' + sample.field1, auth.current());
  state.logs = await api.logs.list();
  renderLogs(state.logs.slice(0, 8));
}

boot();
