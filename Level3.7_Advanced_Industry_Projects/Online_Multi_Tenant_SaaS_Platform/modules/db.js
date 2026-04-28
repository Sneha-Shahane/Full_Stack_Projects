import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Multi Tenant SaaS Platform',
  key: 'Online_Multi_Tenant_SaaS_Platform',
  entity: 'Tenant',
  fields: ['Company','Region','Users'],
  statuses: ['Trial','Active','Suspended','Churned'],
  metric: 'Users',
  aiRule: 'Identify expansion candidates with high user counts',
  chartColor: '#65a30d'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Northwind', field2: 'India', field3: '84', status: 'Active', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'BlueBox', field2: 'EU', field3: '18', status: 'Trial', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'ScaleHub', field2: 'US', field3: '130', status: 'Active', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
