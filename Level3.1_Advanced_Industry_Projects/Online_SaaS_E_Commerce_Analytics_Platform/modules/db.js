import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS E Commerce Analytics Platform',
  key: 'Online_SaaS_E_Commerce_Analytics_Platform',
  entity: 'Commerce Event',
  fields: ['Product','Service','Revenue'],
  statuses: ['Queued','Processed','Failed','Refunded'],
  metric: 'Revenue',
  aiRule: 'Recommendation logic prioritizes high revenue failed or queued commerce events',
  chartColor: '#059669'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Laptop Bundle', field2: 'Catalog API', field3: '125000', status: 'Processed', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Cart Checkout', field2: 'Order Service', field3: '78000', status: 'Queued', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Refund Flow', field2: 'Payment Service', field3: '12000', status: 'Failed', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
