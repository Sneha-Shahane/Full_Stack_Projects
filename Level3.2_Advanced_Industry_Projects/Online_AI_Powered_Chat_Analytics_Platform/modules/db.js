import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online AI Powered Chat Analytics Platform',
  key: 'Online_AI_Powered_Chat_Analytics_Platform',
  entity: 'Workspace',
  fields: ['Room','Team','Messages'],
  statuses: ['Open','Live','Muted','Archived'],
  metric: 'Messages',
  aiRule: 'Realtime simulation monitors busy rooms and suggests moderation actions',
  chartColor: '#e11d48'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Product War Room', field2: 'Design', field3: '230', status: 'Live', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Sprint Planning', field2: 'Engineering', field3: '84', status: 'Open', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Support Desk', field2: 'CX', field3: '310', status: 'Muted', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
