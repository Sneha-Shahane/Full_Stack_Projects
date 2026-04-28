import { uid } from './utils.js';

export const projectConfig = {
  name: 'AI Based Learning Recommendation System',
  key: 'AI_Based_Learning_Recommendation_System',
  entity: 'Recommendation',
  fields: ['Student','Skill Gap','Score'],
  statuses: ['Suggested','Assigned','Completed','Skipped'],
  metric: 'Learning Score',
  aiRule: 'Recommend content for low score skill gaps',
  chartColor: '#4f46e5'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Pooja', field2: 'Algebra', field3: '58', status: 'Suggested', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Amit', field2: 'APIs', field3: '81', status: 'Assigned', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Nisha', field2: 'CSS Grid', field3: '73', status: 'Completed', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
