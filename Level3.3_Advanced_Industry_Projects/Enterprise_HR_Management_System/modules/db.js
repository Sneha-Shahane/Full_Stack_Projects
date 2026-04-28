import { uid } from './utils.js';

export const projectConfig = {
  name: 'Enterprise HR Management System',
  key: 'Enterprise_HR_Management_System',
  entity: 'Employee Case',
  fields: ['Employee','Department','Score'],
  statuses: ['Open','Review','Approved','Closed'],
  metric: 'HR Score',
  aiRule: 'Escalate cases with low score or review status',
  chartColor: '#7c3aed'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Pooja', field2: 'Engineering', field3: '91', status: 'Approved', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Amit', field2: 'Sales', field3: '58', status: 'Review', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Farah', field2: 'Finance', field3: '76', status: 'Open', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
