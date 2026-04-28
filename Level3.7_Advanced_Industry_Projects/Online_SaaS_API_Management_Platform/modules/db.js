import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS API Management Platform',
  key: 'Online_SaaS_API_Management_Platform',
  entity: 'API Product',
  fields: ['API','Team','Requests'],
  statuses: ['Draft','Published','Throttled','Deprecated'],
  metric: 'Requests',
  aiRule: 'API intelligence detects throttled products and demand spikes',
  chartColor: '#2563eb'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Payments API', field2: 'Fintech', field3: '82000', status: 'Published', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Search API', field2: 'Platform', field3: '120000', status: 'Throttled', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Maps API', field2: 'Geo', field3: '35000', status: 'Draft', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
