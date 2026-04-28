import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Healthcare Appointment AI Diagnosis',
  key: 'Online_Healthcare_Appointment_AI_Diagnosis',
  entity: 'Care Case',
  fields: ['Patient','Symptom','Risk'],
  statuses: ['Queued','Diagnosed','Urgent','Closed'],
  metric: 'Risk',
  aiRule: 'Diagnosis simulation flags urgent care cases when risk exceeds threshold',
  chartColor: '#0d9488'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Ravi', field2: 'Fever', field3: '42', status: 'Diagnosed', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Maya', field2: 'Chest Pain', field3: '91', status: 'Urgent', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Dev', field2: 'Cough', field3: '35', status: 'Queued', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
