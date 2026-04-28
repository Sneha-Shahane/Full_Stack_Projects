import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS CRM with AI Insights',
  key: 'Online_SaaS_CRM_with_AI_Insights',
  entity: 'Record',
  fields: ['Name','Owner','Score'],
  statuses: ['New','Active','Review','Closed'],
  metric: 'Operational Score',
  aiRule: 'Rule-based engine highlights high-score or review records',
  chartColor: '#2563eb'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Enterprise Alpha', field2: 'Admin', field3: '82', status: 'Active', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Workflow Beta', field2: 'Manager', field3: '64', status: 'Review', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Insight Gamma', field2: 'User', field3: '91', status: 'New', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
