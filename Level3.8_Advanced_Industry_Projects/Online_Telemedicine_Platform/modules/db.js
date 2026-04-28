import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Telemedicine Platform',
  key: 'Online_Telemedicine_Platform',
  entity: 'Consultation',
  fields: ['Patient','Doctor','Fee'],
  statuses: ['Waiting','Live','Completed','Cancelled'],
  metric: 'Care Revenue',
  aiRule: 'Prioritize live consultations and high fee followups',
  chartColor: '#0d9488'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Ritu', field2: 'Dr. Rao', field3: '700', status: 'Live', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Dev', field2: 'Dr. Sen', field3: '500', status: 'Waiting', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Maya', field2: 'Dr. Iyer', field3: '900', status: 'Completed', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
