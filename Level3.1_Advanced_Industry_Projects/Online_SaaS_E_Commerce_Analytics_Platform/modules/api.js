import { db, seedRecords } from './db.js';
import { uid, delay } from './utils.js';

function canManage(record, user) {
  return user.role === 'Admin' || user.role === 'Manager' || record.owner === user.email;
}

export const api = {
  async seed() {
    await delay(70);
    db.seed(seedRecords);
  },
  records: {
    async list() {
      await delay(90);
      return db.get('records', []);
    },
    async create(payload, user) {
      await delay(100);
      const record = { id: uid(), ...payload, owner: user.email, createdAt: new Date().toISOString() };
      db.set('records', [record, ...db.get('records', [])]);
      db.log(user.name + ' created ' + payload.field1);
      return record;
    },
    async update(id, payload, user) {
      await delay(100);
      const records = db.get('records', []);
      const existing = records.find(record => record.id === id);
      if (!existing || !canManage(existing, user)) throw new Error('Access denied');
      const next = records.map(record => record.id === id ? { ...record, ...payload, updatedAt: new Date().toISOString() } : record);
      db.set('records', next);
      db.log(user.name + ' updated ' + payload.field1);
      return next.find(record => record.id === id);
    },
    async remove(id, user) {
      await delay(100);
      const records = db.get('records', []);
      const existing = records.find(record => record.id === id);
      if (!existing || !canManage(existing, user)) throw new Error('Access denied');
      db.set('records', records.filter(record => record.id !== id));
      db.log(user.name + ' deleted ' + existing.field1);
      return true;
    }
  },
  logs: {
    async list() {
      await delay(50);
      return db.get('logs', []);
    },
    async add(message, user) {
      await delay(50);
      db.log(message, user ? user.name : 'System');
    }
  }
};
