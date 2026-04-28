import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online SaaS Enterprise Search Engine',
  key: 'Online_SaaS_Enterprise_Search_Engine',
  entity: 'AI Result',
  fields: ['Query','Model','Confidence'],
  statuses: ['Indexed','Recommended','Needs Training','Rejected'],
  metric: 'Confidence',
  aiRule: 'Rule-based ranking promotes results above 80 confidence and retrains weak matches',
  chartColor: '#9333ea'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'CRM playbook', field2: 'Semantic v1', field3: '86', status: 'Recommended', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Refund policy', field2: 'Search v2', field3: '62', status: 'Needs Training', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Sales deck', field2: 'Hybrid', field3: '78', status: 'Indexed', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
