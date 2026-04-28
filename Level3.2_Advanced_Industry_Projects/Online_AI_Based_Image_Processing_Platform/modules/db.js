import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online AI Based Image Processing Platform',
  key: 'Online_AI_Based_Image_Processing_Platform',
  entity: 'Media Analysis',
  fields: ['Asset','Model','Confidence'],
  statuses: ['Queued','Processed','Flagged','Archived'],
  metric: 'Confidence',
  aiRule: 'Media AI flags low-confidence or unsafe analysis results',
  chartColor: '#c026d3'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Store Camera', field2: 'Vision v2', field3: '91', status: 'Processed', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Voice Clip', field2: 'Speech AI', field3: '64', status: 'Flagged', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Product Image', field2: 'ImageNet Lite', field3: '78', status: 'Queued', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
