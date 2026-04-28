import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online AI Chatbot Builder Platform',
  key: 'Online_AI_Chatbot_Builder_Platform',
  entity: 'Bot Flow',
  fields: ['Bot','Intent','Confidence'],
  statuses: ['Draft','Training','Live','Needs Data'],
  metric: 'Confidence',
  aiRule: 'Suggest more training data below 70 confidence',
  chartColor: '#9333ea'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'SalesBot', field2: 'Lead Capture', field3: '82', status: 'Live', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'HelpBot', field2: 'Refund', field3: '61', status: 'Needs Data', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'HRBot', field2: 'Leave', field3: '76', status: 'Training', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
