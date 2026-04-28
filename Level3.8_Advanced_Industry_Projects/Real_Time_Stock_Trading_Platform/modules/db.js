import { uid } from './utils.js';

export const projectConfig = {
  name: 'Real Time Stock Trading Platform',
  key: 'Real_Time_Stock_Trading_Platform',
  entity: 'Trade',
  fields: ['Symbol','Side','Value'],
  statuses: ['Queued','Executed','Rejected','Watching'],
  metric: 'Trade Value',
  aiRule: 'Flag risky trades when value is high or side is Sell',
  chartColor: '#059669'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'TCS', field2: 'Buy', field3: '15000', status: 'Executed', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'INFY', field2: 'Sell', field3: '9100', status: 'Queued', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'HDFCBANK', field2: 'Buy', field3: '22000', status: 'Watching', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
