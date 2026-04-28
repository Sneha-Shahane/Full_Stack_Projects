import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Predictive Analytics Dashboard',
  key: 'Online_Predictive_Analytics_Dashboard',
  entity: 'Forecast',
  fields: ['Metric','Segment','Prediction'],
  statuses: ['Draft','Approved','High Risk','Archived'],
  metric: 'Prediction',
  aiRule: 'Predictive model flags high-risk forecasts and summarizes decision signals',
  chartColor: '#0284c7'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Revenue', field2: 'Enterprise', field3: '88', status: 'Approved', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Churn', field2: 'SMB', field3: '76', status: 'High Risk', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Demand', field2: 'Retail', field3: '69', status: 'Draft', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
