import { auth } from './modules/auth.js';
import { api } from './modules/api.js';
import { $, pageName, toNumber } from './modules/utils.js';
import { toast, renderStats, renderRows, renderLogs, renderInsights, drawChart } from './modules/ui.js';

let state = { records: [], logs: [], page: 1, pageSize: 5, chart: null };

async function boot() {
  await api.seed();
  if (pageName().includes('login')) bindAuthPage();
  if (pageName().includes('dashboard')) bindDashboard();
}

function bindAuthPage() {
  if (auth.current()) location.href = 'dashboard.html';
  $('#loginForm').addEventListener('submit', event => {
    event.preventDefault();
    const result = auth.login($('#loginEmail').value, $('#loginPassword').value);
    if (!result.ok) return toast(result.message, 'error');
    toast('Login successful');
    setTimeout(() => location.href = 'dashboard.html', 500);
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
  setInterval(simulateRealtime, 9000);
}

function fillStatuses() {
  const statusOptions = window.projectConfig.statuses.map(status => `<option>${status}</option>`).join('');
  $('#statusFilter').innerHTML = '<option>All</option>' + statusOptions;
  $('#recordStatus').innerHTML = statusOptions;
}

async function load() {
  state.records = await api.records.list();
  state.logs = await api.logs.list();
  refresh();
}

function scopedRecords() {
  const user = auth.current();
  const term = $('#searchInput').value.toLowerCase();
  const status = $('#statusFilter').value;
  return state.records.filter(record => {
    const roleAccess = user.role !== 'User' || record.owner === user.email;
    const textMatch = Object.values(record).join(' ').toLowerCase().includes(term);
    const statusMatch = status === 'All' || record.status === status;
    return roleAccess && textMatch && statusMatch;
  });
}

function refresh() {
  const filtered = scopedRecords();
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * state.pageSize;
  const pageRecords = filtered.slice(start, start + state.pageSize);
  renderStats(filtered, auth.current());
  renderRows(pageRecords, auth.current(), editRecord, removeRecord);
  renderLogs(state.logs.slice(0, 8));
  renderInsights(filtered);
  $('#pageInfo').textContent = `Page ${state.page} of ${totalPages}`;
  state.chart = drawChart(state.chart, filtered);
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

async function removeRecord(record) {
  if (!confirm('Delete this record?')) return;
  await api.records.remove(record.id, auth.current());
  toast('Record deleted');
  await load();
}

async function simulateRealtime() {
  if (!auth.current()) return;
  const random = state.records[Math.floor(Math.random() * state.records.length)];
  if (!random) return;
  await api.logs.add(`Realtime sync checked ${random.field1}`, auth.current());
  state.logs = await api.logs.list();
  renderLogs(state.logs.slice(0, 8));
}

boot();
