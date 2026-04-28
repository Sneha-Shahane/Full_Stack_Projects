import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS Identity Access Management',
  key: 'Online_SaaS_Identity_Access_Management',
  entity: 'Access Policy',
  fields: ['User Group','Application','Risk'],
  statuses: ['Requested','Approved','Privileged','Revoked'],
  metric: 'Access Risk',
  aiRule: 'IAM engine flags privileged access with elevated risk',
  chartColor: '#4f46e5'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Finance Admins', field2: 'ERP', field3: '88', status: 'Privileged', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Sales Team', field2: 'CRM', field3: '34', status: 'Approved', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Contractors', field2: 'Storage', field3: '69', status: 'Requested', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
