import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online ERP System',
  key: 'Online_ERP_System',
  entity: 'ERP Record',
  fields: ['Module','Owner','Value'],
  statuses: ['Draft','Approved','Processing','Closed'],
  metric: 'ERP Value',
  aiRule: 'Route high-value records to manager approval',
  chartColor: '#2563eb'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Procurement', field2: 'Nita', field3: '93000', status: 'Processing', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Finance', field2: 'Dev', field3: '45000', status: 'Approved', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Inventory', field2: 'Sara', field3: '12000', status: 'Draft', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
