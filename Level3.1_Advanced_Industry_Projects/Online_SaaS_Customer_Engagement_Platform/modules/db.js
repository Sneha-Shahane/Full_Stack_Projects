import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS Customer Engagement Platform',
  key: 'Online_SaaS_Customer_Engagement_Platform',
  entity: 'Customer Touchpoint',
  fields: ['Customer','Channel','Priority'],
  statuses: ['New','Engaged','Escalated','Resolved'],
  metric: 'Priority',
  aiRule: 'Support AI escalates high-priority issues and recommends next-best actions',
  chartColor: '#d97706'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Bright Co', field2: 'Email', field3: '8', status: 'Escalated', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Nova Apps', field2: 'Chat', field3: '4', status: 'Engaged', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Solo Desk', field2: 'Portal', field3: '6', status: 'New', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
