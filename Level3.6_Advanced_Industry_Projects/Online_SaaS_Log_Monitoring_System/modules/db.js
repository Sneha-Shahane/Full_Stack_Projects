import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS Log Monitoring System',
  key: 'Online_SaaS_Log_Monitoring_System',
  entity: 'Engineering Signal',
  fields: ['Service','Owner','Alerts'],
  statuses: ['Healthy','Warning','Critical','Resolved'],
  metric: 'Alerts',
  aiRule: 'Monitoring rules escalate critical services with high alert counts',
  chartColor: '#ea580c'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Auth API', field2: 'Platform', field3: '4', status: 'Warning', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Deploy Runner', field2: 'DevOps', field3: '12', status: 'Critical', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Audit Logs', field2: 'Security', field3: '1', status: 'Healthy', owner: 'admin@example.com', createdAt: new Date().toISOString() }
];

export const db = {
  key(name) { return projectConfig.key + ':' + name; },
  get(name, fallback) {
    const raw = localStorage.getItem(this.key(name));
    return raw ? JSON.parse(raw) : fallback;
  },
  set(name, value) { localStorage.setItem(this.key(name), JSON.stringify(value)); },
  remove(name) { localStorage.removeItem(this.key(name)); },
  seed(records) {
    if (!localStorage.getItem(this.key('records'))) this.set('records', records);
    if (!localStorage.getItem(this.key('logs'))) this.set('logs', []);
  },
  log(message, actor = 'System') {
    const logs = this.get('logs', []);
    logs.unshift({ id: uid(), message, actor, at: new Date().toISOString() });
    this.set('logs', logs.slice(0, 50));
  }
};
