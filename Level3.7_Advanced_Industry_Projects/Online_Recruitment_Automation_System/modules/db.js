import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Recruitment Automation System',
  key: 'Online_Recruitment_Automation_System',
  entity: 'Pipeline Item',
  fields: ['Candidate','Role','Fit'],
  statuses: ['Sourced','Screening','Offer','Rejected'],
  metric: 'Fit',
  aiRule: 'Move high-fit candidates to screening',
  chartColor: '#db2777'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Farah', field2: 'Product Manager', field3: '89', status: 'Screening', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Nilesh', field2: 'DevOps', field3: '78', status: 'Sourced', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Anu', field2: 'Support', field3: '61', status: 'Sourced', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
