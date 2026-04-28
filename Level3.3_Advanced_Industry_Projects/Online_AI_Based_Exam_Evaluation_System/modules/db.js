import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online AI Based Exam Evaluation System',
  key: 'Online_AI_Based_Exam_Evaluation_System',
  entity: 'Academic Insight',
  fields: ['Learner','Module','Score'],
  statuses: ['Assigned','In Progress','At Risk','Completed'],
  metric: 'Learning Score',
  aiRule: 'AI simulation recommends intervention when scores are low or status is At Risk',
  chartColor: '#7c3aed'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Neha', field2: 'AI Quiz', field3: '88', status: 'Completed', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Sam', field2: 'Cloud Lab', field3: '56', status: 'At Risk', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Isha', field2: 'Security Basics', field3: '72', status: 'In Progress', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
