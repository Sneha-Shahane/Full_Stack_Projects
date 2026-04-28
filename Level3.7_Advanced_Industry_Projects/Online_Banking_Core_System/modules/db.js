import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Banking Core System',
  key: 'Online_Banking_Core_System',
  entity: 'Account',
  fields: ['Holder','Type','Balance'],
  statuses: ['Active','Frozen','Review','Closed'],
  metric: 'Balance',
  aiRule: 'Flag high balance review accounts',
  chartColor: '#16a34a'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Meena', field2: 'Savings', field3: '150000', status: 'Active', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Amit', field2: 'Current', field3: '520000', status: 'Review', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Sara', field2: 'Salary', field3: '86000', status: 'Active', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
