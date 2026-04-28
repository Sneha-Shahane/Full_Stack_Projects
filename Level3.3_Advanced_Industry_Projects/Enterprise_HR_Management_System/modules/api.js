import { db, seedRecords } from './db.js';
import { uid, delay } from './utils.js';

function canManage(record, user) {
  return user.role === 'Admin' || user.role === 'Manager' || record.owner === user.email;
}

export const api = {
  async seed() {
    await delay(80);
    db.seed(seedRecords);
  },
  records: {
    async list() {
      await delay(120);
      return db.get('records', []);
    },
    async create(payload, user) {
      await delay(120);
      const records = db.get('records', []);
      const record = { id: uid(), ...payload, owner: user.email, createdAt: new Date().toISOString() };
      db.set('records', [record, ...records]);
      db.log(`${user.name} created ${payload.field1}`);
      return record;
    },
    async update(id, payload, user) {
      await delay(120);
      const records = db.get('records', []);
      const target = records.find(record => record.id === id);
      if (!target || !canManage(target, user)) throw new Error('Access denied');
      const next = records.map(record => record.id === id ? { ...record, ...payload, updatedAt: new Date().toISOString() } : record);
      db.set('records', next);
      db.log(`${user.name} updated ${payload.field1}`);
      return next.find(record => record.id === id);
    },
    async remove(id, user) {
      await delay(120);
      const records = db.get('records', []);
      const target = records.find(record => record.id === id);
      if (!target || !canManage(target, user)) throw new Error('Access denied');
      db.set('records', records.filter(record => record.id !== id));
      db.log(`${user.name} deleted ${target.field1}`);
      return true;
    }
  },
  logs: {
    async list() {
      await delay(60);
      return db.get('logs', []);
    },
    async add(message, user) {
      await delay(60);
      db.log(message, user?.name);
    }
  }
};
