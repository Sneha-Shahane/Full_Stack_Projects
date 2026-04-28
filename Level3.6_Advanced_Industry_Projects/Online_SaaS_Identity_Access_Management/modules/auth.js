import { db } from './db.js';

const defaultUsers = [
  { name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'Admin' },
  { name: 'Manager User', email: 'manager@example.com', password: 'manager123', role: 'Manager' },
  { name: 'Demo User', email: 'user@example.com', password: 'user123', role: 'User' }
];

export const auth = {
  users() {
    const users = db.get('users', defaultUsers);
    db.set('users', users);
    return users;
  },
  signup(user) {
    const users = this.users();
    const email = user.email.trim().toLowerCase();
    if (users.some(item => item.email === email)) return { ok: false, message: 'Email already exists' };
    users.push({ ...user, email });
    db.set('users', users);
    db.log('Signup created for ' + user.name);
    return { ok: true, message: 'Account created' };
  },
  login(email, password) {
    const user = this.users().find(item => item.email === email.trim().toLowerCase() && item.password === password);
    if (!user) return { ok: false, message: 'Invalid credentials' };
    const session = { name: user.name, email: user.email, role: user.role };
    db.set('session', session);
    db.log(user.name + ' logged in');
    return { ok: true, user: session };
  },
  current() { return db.get('session', null); },
  requireUser() {
    const user = this.current();
    if (!user) location.href = 'login.html';
    return user;
  },
  logout() {
    const user = this.current();
    if (user) db.log(user.name + ' logged out');
    db.remove('session');
  }
};
