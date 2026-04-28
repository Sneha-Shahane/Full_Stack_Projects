import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Cloud IDE',
  key: 'Online_Cloud_IDE',
  entity: 'Workspace',
  fields: ['Project','Language','Builds'],
  statuses: ['Idle','Building','Deployed','Failed'],
  metric: 'Builds',
  aiRule: 'Suggest debugging when failed builds exceed threshold',
  chartColor: '#475569'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Billing API', field2: 'JavaScript', field3: '18', status: 'Deployed', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Portfolio', field2: 'HTML', field3: '5', status: 'Idle', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Compiler Lab', field2: 'C#', field3: '11', status: 'Failed', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
