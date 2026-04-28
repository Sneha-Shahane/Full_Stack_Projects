import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS Financial Planning Tool',
  key: 'Online_SaaS_Financial_Planning_Tool',
  entity: 'Finance Plan',
  fields: ['Plan','Owner','Amount'],
  statuses: ['Draft','Approved','Variance','Closed'],
  metric: 'Planned Amount',
  aiRule: 'Finance AI detects variance and high-value planning risks',
  chartColor: '#16a34a'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Q3 Budget', field2: 'CFO', field3: '850000', status: 'Approved', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Hiring Plan', field2: 'HR', field3: '420000', status: 'Variance', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Cloud Spend', field2: 'IT', field3: '260000', status: 'Draft', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
