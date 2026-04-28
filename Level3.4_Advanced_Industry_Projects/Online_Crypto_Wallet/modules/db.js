import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Crypto Wallet',
  key: 'Online_Crypto_Wallet',
  entity: 'Wallet Asset',
  fields: ['Coin','Network','Value'],
  statuses: ['Holding','Swapping','Staked','Alert'],
  metric: 'Portfolio',
  aiRule: 'Alert volatile assets with high value',
  chartColor: '#d97706'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'BTC', field2: 'Bitcoin', field3: '180000', status: 'Holding', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'ETH', field2: 'Ethereum', field3: '95000', status: 'Staked', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'DOGE', field2: 'Dogecoin', field3: '22000', status: 'Alert', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
