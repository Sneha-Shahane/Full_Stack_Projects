import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS Billing Platform',
  key: 'Online_SaaS_Billing_Platform',
  entity: 'Subscription',
  fields: ['Tenant','Plan','MRR'],
  statuses: ['Trial','Active','Past Due','Cancelled'],
  metric: 'MRR',
  aiRule: 'Detect churn risk for past due accounts',
  chartColor: '#0891b2'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Orbit CRM', field2: 'Pro', field3: '4999', status: 'Active', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Solo Desk', field2: 'Starter', field3: '999', status: 'Trial', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Metricly', field2: 'Scale', field3: '12999', status: 'Past Due', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
