import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Digital Payment Gateway',
  key: 'Online_Digital_Payment_Gateway',
  entity: 'Payment',
  fields: ['Merchant','Method','Amount'],
  statuses: ['Initiated','Captured','Failed','Refunded'],
  metric: 'Captured Amount',
  aiRule: 'Review failed high-value payments',
  chartColor: '#2563eb'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'StoreOne', field2: 'UPI', field3: '2500', status: 'Captured', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'HotelPro', field2: 'Card', field3: '18000', status: 'Failed', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'CourseHub', field2: 'Wallet', field3: '1200', status: 'Captured', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
