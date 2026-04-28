import { $, toNumber } from './utils.js';

export function toast(message, type = 'success') {
  const host = $('#toastHost');
  const color = type === 'error' ? 'bg-rose-600' : 'bg-slate-900';
  const node = document.createElement('div');
  node.className = `${color} text-white rounded px-4 py-3 shadow text-sm`;
  node.textContent = message;
  host.appendChild(node);
  setTimeout(() => node.remove(), 2600);
}

export function renderStats(records, user) {
  const config = window.projectConfig;
  const total = records.length;
  const numeric = records.reduce((sum, record) => sum + toNumber(record.field3), 0);
  const active = records.filter(record => record.status === config.statuses[1]).length;
  $('#statsGrid').innerHTML = [
    ['Visible Records', total],
    [config.metric, numeric || active],
    ['Active Workflow', active],
    ['Role', user.role]
  ].map(([label, value]) => `
    <article class="bg-white rounded-lg border border-slate-200 p-4">
      <p class="text-sm text-slate-500">${label}</p>
      <p class="mt-2 text-3xl font-bold">${value}</p>
    </article>`).join('');
}

export function renderRows(records, user, onEdit, onDelete) {
  const config = window.projectConfig;
  const rows = records.map(record => {
    const locked = user.role === 'User' && record.owner !== user.email;
    const actions = locked ? '<span class="text-slate-400">Read only</span>' :
      '<button class="edit px-2 py-1 rounded bg-amber-100 text-amber-800">Edit</button> ' +
      '<button class="delete px-2 py-1 rounded bg-rose-100 text-rose-800">Delete</button>';
    return `<tr class="border-b last:border-0" data-id="${record.id}">
      <td class="py-3 font-medium">${record.field1}</td>
      <td>${record.field2}</td>
      <td>${record.field3}</td>
      <td><span class="rounded bg-slate-100 px-2 py-1 text-xs">${record.status}</span></td>
      <td>${actions}</td>
    </tr>`;
  }).join('');
  $('#recordRows').innerHTML = rows || `<tr><td class="py-5 text-slate-500" colspan="5">No ${config.entity.toLowerCase()} records found.</td></tr>`;
  $('#recordRows').querySelectorAll('.edit').forEach(button => {
    button.addEventListener('click', event => onEdit(records.find(item => item.id === event.target.closest('tr').dataset.id)));
  });
  $('#recordRows').querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', event => onDelete(records.find(item => item.id === event.target.closest('tr').dataset.id)));
  });
}

export function renderLogs(logs) {
  $('#activityList').innerHTML = logs.map(log => `
    <div class="rounded border border-slate-200 p-3">
      <p class="font-medium">${log.message}</p>
      <p class="text-xs text-slate-500">${new Date(log.at).toLocaleString()}</p>
    </div>`).join('') || '<p class="text-slate-500">No activity yet.</p>';
}

export function renderInsights(records) {
  const config = window.projectConfig;
  const insights = records.slice(0, 4).map(record => {
    const score = toNumber(record.field3);
    const risk = score > 80 || record.status === config.statuses[2] || record.status.toLowerCase().includes('risk') || record.status.toLowerCase().includes('alert');
    const message = risk ? `Priority action: ${record.field1}` : `Healthy signal: ${record.field1}`;
    return `<div class="rounded border ${risk ? 'border-rose-200 bg-rose-50' : 'border-emerald-200 bg-emerald-50'} p-3">
      <p class="text-sm font-semibold">${message}</p>
      <p class="text-xs text-slate-500">${config.aiRule}</p>
    </div>`;
  });
  $('#aiInsights').innerHTML = insights.join('') || '<p class="text-sm text-slate-500">No insight data available.</p>';
}

export function drawChart(existingChart, records) {
  const config = window.projectConfig;
  const grouped = config.statuses.map(status => records.filter(record => record.status === status).length);
  if (existingChart) existingChart.destroy();
  return new Chart($('#mainChart'), {
    type: 'bar',
    data: {
      labels: config.statuses,
      datasets: [{ label: config.entity + ' count', data: grouped, backgroundColor: config.chartColor }]
    },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });
}
