import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Video Streaming Platform',
  key: 'Online_Video_Streaming_Platform',
  entity: 'Video',
  fields: ['Title','Creator','Views'],
  statuses: ['Draft','Published','Trending','Removed'],
  metric: 'Views',
  aiRule: 'Promote videos with high views to trending',
  chartColor: '#dc2626'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'City Travel', field2: 'Nora', field3: '45000', status: 'Trending', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'C# Crash Course', field2: 'Kunal', field3: '12000', status: 'Published', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Cooking Quick', field2: 'Maya', field3: '7200', status: 'Draft', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
