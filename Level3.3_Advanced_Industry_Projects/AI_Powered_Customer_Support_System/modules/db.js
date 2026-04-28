import { uid } from './utils.js';

export const projectConfig = {
  name: 'AI Powered Customer Support System',
  key: 'AI_Powered_Customer_Support_System',
  entity: 'Ticket',
  fields: ['Customer','Intent','Priority'],
  statuses: ['New','Bot Answered','Escalated','Resolved'],
  metric: 'Priority',
  aiRule: 'Escalate refund or high priority support tickets',
  chartColor: '#d97706'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Asha', field2: 'Refund', field3: '9', status: 'Escalated', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Ravi', field2: 'Tracking', field3: '4', status: 'Bot Answered', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Mina', field2: 'Login Help', field3: '6', status: 'New', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
