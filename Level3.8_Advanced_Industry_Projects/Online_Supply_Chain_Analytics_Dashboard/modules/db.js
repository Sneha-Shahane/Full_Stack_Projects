import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Supply Chain Analytics Dashboard',
  key: 'Online_Supply_Chain_Analytics_Dashboard',
  entity: 'Route',
  fields: ['Supplier','Lane','Cost'],
  statuses: ['Planned','In Transit','Delayed','Delivered'],
  metric: 'Cost',
  aiRule: 'Warn when delayed route cost is high',
  chartColor: '#ea580c'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'FreshFarm', field2: 'Pune-Goa', field3: '21000', status: 'In Transit', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'TechParts', field2: 'Delhi-Mumbai', field3: '56000', status: 'Delayed', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'PackWell', field2: 'Surat-Pune', field3: '18000', status: 'Delivered', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
