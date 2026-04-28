import { uid } from './utils.js';

export const projectConfig = {
  name: 'AI Based Resume Analyzer',
  key: 'AI_Based_Resume_Analyzer',
  entity: 'Resume',
  fields: ['Candidate','Keywords','Score'],
  statuses: ['Uploaded','Shortlisted','Rejected','Review'],
  metric: 'Match Score',
  aiRule: 'Keyword matching recommends shortlist above 75',
  chartColor: '#c026d3'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Anya', field2: 'C#, SQL, Azure', field3: '86', status: 'Shortlisted', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Zubin', field2: 'HTML, CSS', field3: '54', status: 'Review', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Nilesh', field2: 'JavaScript, Node', field3: '79', status: 'Uploaded', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
