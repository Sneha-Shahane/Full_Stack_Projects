import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Fraud Detection System',
  key: 'Online_Fraud_Detection_System',
  entity: 'Transaction',
  fields: ['Account','Pattern','Risk'],
  statuses: ['Normal','Review','Blocked','Cleared'],
  metric: 'Risk',
  aiRule: 'Block transactions with risk over 80',
  chartColor: '#dc2626'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'AC-102', field2: 'Rapid transfers', field3: '91', status: 'Blocked', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'AC-224', field2: 'New device', field3: '67', status: 'Review', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'AC-301', field2: 'Routine', field3: '18', status: 'Normal', owner: 'admin@example.com', createdAt: new Date().toISOString() }
];

export const db = {
  key(name) { return projectConfig.key + ':' + name; },
  get(name, fallback) {
    const raw = localStorage.getItem(this.key(name));
    return raw ? JSON.parse(raw) : fallback;
  },
  set(name, value) {
    localStorage.setItem(this.key(name), JSON.stringify(value));
  },
  remove(name) {
    localStorage.removeItem(this.key(name));
  },
  seed(records) {
    if (!localStorage.getItem(this.key('records'))) this.set('records', records);
    if (!localStorage.getItem(this.key('logs'))) this.set('logs', []);
  },
  log(message, actor = 'System') {
    const logs = this.get('logs', []);
    logs.unshift({ id: uid(), message, actor, at: new Date().toISOString() });
    this.set('logs', logs.slice(0, 40));
  }
};
