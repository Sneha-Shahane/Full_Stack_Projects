import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS Knowledge Management System',
  key: 'Online_SaaS_Knowledge_Management_System',
  entity: 'Content Asset',
  fields: ['Title','Owner','Version'],
  statuses: ['Draft','Approved','Review','Archived'],
  metric: 'Version Score',
  aiRule: 'Knowledge engine surfaces assets in review and suggests approval routing',
  chartColor: '#475569'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Security Policy', field2: 'Legal', field3: '3', status: 'Approved', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Brand Kit', field2: 'Marketing', field3: '7', status: 'Review', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Runbook', field2: 'DevOps', field3: '2', status: 'Draft', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
