import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Cloud Cost Optimization Tool',
  key: 'Online_Cloud_Cost_Optimization_Tool',
  entity: 'Cloud Asset',
  fields: ['Resource','Provider','Cost'],
  statuses: ['Running','Optimized','Over Budget','Stopped'],
  metric: 'Cloud Cost',
  aiRule: 'Cost optimizer identifies over-budget resources and rightsizing actions',
  chartColor: '#0891b2'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'API Cluster', field2: 'AWS', field3: '42000', status: 'Running', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Analytics DB', field2: 'Azure', field3: '88000', status: 'Over Budget', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Cache Node', field2: 'GCP', field3: '9000', status: 'Optimized', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
