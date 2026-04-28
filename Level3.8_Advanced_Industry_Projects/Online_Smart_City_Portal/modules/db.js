import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Smart City Portal',
  key: 'Online_Smart_City_Portal',
  entity: 'Civic Issue',
  fields: ['Ward','Category','Severity'],
  statuses: ['Reported','Assigned','Resolved','Escalated'],
  metric: 'Severity',
  aiRule: 'Escalate high severity civic issues',
  chartColor: '#0891b2'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Ward 7', field2: 'Street Light', field3: '35', status: 'Assigned', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Ward 2', field2: 'Water Leak', field3: '84', status: 'Escalated', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Ward 9', field2: 'Garbage', field3: '48', status: 'Reported', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
