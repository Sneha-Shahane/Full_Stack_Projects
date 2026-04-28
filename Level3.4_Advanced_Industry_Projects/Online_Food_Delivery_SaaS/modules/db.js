import { uid } from './utils.js';

export const projectConfig = {
  name: 'Online Food Delivery SaaS',
  key: 'Online_Food_Delivery_SaaS',
  entity: 'Delivery',
  fields: ['Restaurant','Rider','Amount'],
  statuses: ['Preparing','On Route','Delivered','Delayed'],
  metric: 'GMV',
  aiRule: 'Mark delayed deliveries for manager attention',
  chartColor: '#ea580c'
};

window.projectConfig = projectConfig;

export const seedRecords = [
  { id: uid(), field1: 'Spice Hub', field2: 'Ramesh', field3: '650', status: 'On Route', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Cafe One', field2: 'Seema', field3: '280', status: 'Delivered', owner: 'admin@example.com', createdAt: new Date().toISOString() },
  { id: uid(), field1: 'Green Bowl', field2: 'Irfan', field3: '420', status: 'Delayed', owner: 'admin@example.com', createdAt: new Date().toISOString() }
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
