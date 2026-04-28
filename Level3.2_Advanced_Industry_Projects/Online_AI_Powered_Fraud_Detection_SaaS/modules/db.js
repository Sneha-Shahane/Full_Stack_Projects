import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online AI Powered Fraud Detection SaaS',
  key: 'Online_AI_Powered_Fraud_Detection_SaaS',
  entity: 'Risk Event',
  fields: ['Account','Pattern','Risk'],
  statuses: ['Normal','Review','Blocked','Cleared'],
  metric: 'Risk',
  aiRule: 'Fraud model blocks events with risk above 80 and reviews suspicious patterns',
  chartColor: '#dc2626'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'AC-1001', field2: 'Velocity Spike', field3: '92', status: 'Blocked', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'AC-2110', field2: 'New Device', field3: '68', status: 'Review', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'AC-3220', field2: 'Normal Spend', field3: '21', status: 'Normal', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
