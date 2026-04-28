import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Trading Dashboard',
  key: 'Online_Trading_Dashboard',
  entity: 'Position',
  fields: ['Asset','Strategy','PnL'],
  statuses: ['Open','Hedged','Closed','Alert'],
  metric: 'PnL',
  aiRule: 'Alert negative PnL positions',
  chartColor: '#059669'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'NIFTY', field2: 'Momentum', field3: '4200', status: 'Open', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'BANKNIFTY', field2: 'Hedge', field3: '-1800', status: 'Alert', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'RELIANCE', field2: 'Swing', field3: '2300', status: 'Closed', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
