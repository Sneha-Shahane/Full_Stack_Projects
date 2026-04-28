import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS Business Automation Platform',
  key: 'Online_SaaS_Business_Automation_Platform',
  entity: 'Automation Flow',
  fields: ['Workflow','Trigger','Runs'],
  statuses: ['Draft','Active','Failed','Paused'],
  metric: 'Workflow Runs',
  aiRule: 'Automation monitor flags failed flows and suggests retry routing',
  chartColor: '#65a30d'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Invoice Sync', field2: 'Webhook', field3: '240', status: 'Active', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Lead Routing', field2: 'Form Submit', field3: '88', status: 'Failed', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Report Email', field2: 'Schedule', field3: '120', status: 'Paused', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
