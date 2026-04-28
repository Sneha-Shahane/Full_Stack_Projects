import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS HR Analytics Platform',
  key: 'Online_SaaS_HR_Analytics_Platform',
  entity: 'Talent Signal',
  fields: ['Employee','Department','Fit'],
  statuses: ['New','Shortlisted','At Risk','Hired'],
  metric: 'Fit Score',
  aiRule: 'HR analytics highlights high-fit candidates and at-risk employees',
  chartColor: '#db2777'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Asha', field2: 'Engineering', field3: '87', status: 'Shortlisted', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Kabir', field2: 'Sales', field3: '63', status: 'New', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Meera', field2: 'Support', field3: '58', status: 'At Risk', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
