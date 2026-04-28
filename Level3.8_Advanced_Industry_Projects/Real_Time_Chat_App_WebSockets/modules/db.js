import { uid } from './utils.js';

export const projectConfig = {
  name: 'Real Time Chat App WebSockets',
  key: 'Real_Time_Chat_App_WebSockets',
  entity: 'Channel',
  fields: ['Room','Moderator','Messages'],
  statuses: ['Open','Busy','Muted','Archived'],
  metric: 'Messages',
  aiRule: 'Auto-moderate rooms with high activity',
  chartColor: '#e11d48'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Support', field2: 'Asha', field3: '142', status: 'Busy', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'General', field2: 'Ravi', field3: '44', status: 'Open', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Incidents', field2: 'Mira', field3: '210', status: 'Muted', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
