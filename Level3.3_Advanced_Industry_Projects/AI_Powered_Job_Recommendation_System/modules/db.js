import { uid } from './utils.js';

export const projectConfig = {
  name: 'AI Powered Job Recommendation System',
  key: 'AI_Powered_Job_Recommendation_System',
  entity: 'Recommendation',
  fields: ['Candidate','Role','Match'],
  statuses: ['Suggested','Applied','Interview','Rejected'],
  metric: 'Match',
  aiRule: 'Rule-based role suggestions above 80 match',
  chartColor: '#9333ea'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Karan', field2: 'Backend Developer', field3: '84', status: 'Suggested', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Riya', field2: 'Data Analyst', field3: '91', status: 'Interview', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Om', field2: 'Designer', field3: '63', status: 'Suggested', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
