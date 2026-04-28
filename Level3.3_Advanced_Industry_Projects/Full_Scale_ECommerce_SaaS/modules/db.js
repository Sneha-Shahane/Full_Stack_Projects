import { uid } from './utils.js';

export const projectConfig = {
  name: 'Full Scale ECommerce SaaS',
  key: 'Full_Scale_ECommerce_SaaS',
  entity: 'Order',
  fields: ['Customer','Channel','Amount'],
  statuses: ['New','Packed','Shipped','Refunded'],
  metric: 'Revenue',
  aiRule: 'Suggest restock when order value is high and status is New',
  chartColor: '#2563eb'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Aarav Singh', field2: 'Web Store', field3: '12999', status: 'New', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Mira Patel', field2: 'Marketplace', field3: '3499', status: 'Shipped', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Ravi Shah', field2: 'Mobile App', field3: '7999', status: 'Packed', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
