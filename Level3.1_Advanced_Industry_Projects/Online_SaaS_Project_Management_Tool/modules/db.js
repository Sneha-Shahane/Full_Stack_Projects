import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS Project Management Tool',
  key: 'Online_SaaS_Project_Management_Tool',
  entity: 'Task',
  fields: ['Task','Owner','Points'],
  statuses: ['Backlog','In Progress','Done','Blocked'],
  metric: 'Story Points',
  aiRule: 'Flag blocked tasks with high points',
  chartColor: '#7c3aed'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Auth Module', field2: 'Sara', field3: '8', status: 'In Progress', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Billing Fix', field2: 'Imran', field3: '13', status: 'Blocked', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'UI Polish', field2: 'Mira', field3: '5', status: 'Done', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
