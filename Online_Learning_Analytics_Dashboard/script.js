const config = {
  entity: 'Learner',
  plural: 'Learners',
  fields: ['Student','Course','Progress'],
  statuses: ['Behind','On track','Completed'],
  metric: 'Average progress',
  storageKey: 'Online_Learning_Analytics_Dashboard_records',
  userKey: 'Online_Learning_Analytics_Dashboard_users',
  sessionKey: 'Online_Learning_Analytics_Dashboard_session'
};

const seedItems = [
    { id: crypto.randomUUID(), field1: 'Asha', field2: 'JavaScript', field3: '65', status: 'On track', owner: 'admin@example.com' },
    { id: crypto.randomUUID(), field1: 'Dev', field2: 'C#', field3: '100', status: 'Completed', owner: 'admin@example.com' }
];

const defaultUsers = [
  { name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'Admin' },
  { name: 'Demo User', email: 'user@example.com', password: 'user123', role: 'User' }
];

let currentUser = null;
const authView = document.getElementById('authView');
const appView = document.getElementById('appView');
const navUser = document.getElementById('navUser');
const userBadge = document.getElementById('userBadge');
const itemForm = document.getElementById('itemForm');
const itemsList = document.getElementById('itemsList');
const statusSelect = document.getElementById('status');
const searchInput = document.getElementById('searchInput');

function read(key, fallback) {
  return JSON.parse(localStorage.getItem(key)) || fallback;
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItems() { return read(config.storageKey, seedItems); }
function saveItems(items) { write(config.storageKey, items); }
function getUsers() { return read(config.userKey, defaultUsers); }
function saveUsers(users) { write(config.userKey, users); }

function init() {
  if (!localStorage.getItem(config.userKey)) saveUsers(defaultUsers);
  if (!localStorage.getItem(config.storageKey)) saveItems(seedItems);
  currentUser = JSON.parse(localStorage.getItem(config.sessionKey));
  statusSelect.innerHTML = config.statuses.map(status => '<option>' + status + '</option>').join('');
  render();
}

function canManage(item) {
  return currentUser.role === 'Admin' || item.owner === currentUser.email;
}

function filteredItems() {
  const term = searchInput.value.toLowerCase();
  return getItems().filter(item => {
    const roleAllowed = currentUser.role === 'Admin' || item.owner === currentUser.email;
    const matches = Object.values(item).join(' ').toLowerCase().includes(term);
    return roleAllowed && matches;
  });
}

function render() {
  if (!currentUser) {
    authView.classList.remove('hidden');
    appView.classList.add('hidden');
    navUser.classList.add('hidden');
    return;
  }

  authView.classList.add('hidden');
  appView.classList.remove('hidden');
  navUser.classList.remove('hidden');
  navUser.classList.add('flex');
  userBadge.textContent = currentUser.name + ' (' + currentUser.role + ')';

  const items = filteredItems();
  document.getElementById('totalCount').textContent = items.length;
  document.getElementById('roleValue').textContent = currentUser.role;
  document.getElementById('metricValue').textContent = calculateMetric(items);
  itemsList.innerHTML = items.map(itemCard).join('') || '<p class="text-slate-500">No records found.</p>';
}

function calculateMetric(items) {
  const total = items.reduce((sum, item) => {
    const value = Number(String(item.field3).replace(/[^0-9.]/g, ''));
    return sum + (isNaN(value) ? 0 : value);
  }, 0);
  if (config.metric.toLowerCase().includes('average') && items.length) return Math.round(total / items.length);
  return total || items.filter(item => item.status === config.statuses[1]).length;
}

function itemCard(item) {
  const actions = canManage(item)
    ? '<button onclick="editItem(\'' + item.id + '\')" class="px-3 py-1 bg-amber-100 text-amber-800 rounded text-sm">Edit</button>' +
      '<button onclick="deleteItem(\'' + item.id + '\')" class="px-3 py-1 bg-rose-100 text-rose-800 rounded text-sm">Delete</button>'
    : '';

  return '<article class="border border-slate-200 rounded-lg p-4">' +
    '<div class="flex items-start justify-between gap-3">' +
    '<div><h3 class="font-semibold">' + item.field1 + '</h3>' +
    '<p class="text-sm text-slate-500">' + config.fields[1] + ': ' + item.field2 + '</p>' +
    '<p class="text-sm text-slate-500">' + config.fields[2] + ': ' + item.field3 + '</p></div>' +
    '<span class="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">' + item.status + '</span></div>' +
    '<div class="mt-4 flex gap-2">' + actions + '</div></article>';
}

document.getElementById('signupForm').addEventListener('submit', event => {
  event.preventDefault();
  const users = getUsers();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  if (users.some(user => user.email === email)) return alert('Email already exists.');
  users.push({
    name: document.getElementById('signupName').value.trim(),
    email,
    password: document.getElementById('signupPassword').value,
    role: document.getElementById('signupRole').value
  });
  saveUsers(users);
  alert('Account created. Please login.');
  event.target.reset();
});

document.getElementById('loginForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const user = getUsers().find(account => account.email === email && account.password === password);
  if (!user) return alert('Invalid email or password.');
  currentUser = { name: user.name, email: user.email, role: user.role };
  write(config.sessionKey, currentUser);
  render();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem(config.sessionKey);
  currentUser = null;
  render();
});

itemForm.addEventListener('submit', event => {
  event.preventDefault();
  const items = getItems();
  const editId = document.getElementById('editId').value;
  const oldItem = items.find(item => item.id === editId);
  const record = {
    id: editId || crypto.randomUUID(),
    field1: document.getElementById('field1').value.trim(),
    field2: document.getElementById('field2').value.trim(),
    field3: document.getElementById('field3').value.trim(),
    status: statusSelect.value,
    owner: oldItem ? oldItem.owner : currentUser.email
  };
  saveItems(editId ? items.map(item => item.id === editId ? record : item) : [...items, record]);
  itemForm.reset();
  document.getElementById('editId').value = '';
  document.getElementById('formTitle').textContent = 'Add ' + config.entity;
  render();
});

function editItem(id) {
  const item = getItems().find(record => record.id === id);
  if (!item || !canManage(item)) return;
  document.getElementById('editId').value = item.id;
  document.getElementById('field1').value = item.field1;
  document.getElementById('field2').value = item.field2;
  document.getElementById('field3').value = item.field3;
  statusSelect.value = item.status;
  document.getElementById('formTitle').textContent = 'Edit ' + config.entity;
}

function deleteItem(id) {
  const item = getItems().find(record => record.id === id);
  if (!item || !canManage(item)) return;
  if (!confirm('Delete this record?')) return;
  saveItems(getItems().filter(record => record.id !== id));
  render();
}

searchInput.addEventListener('input', render);
init();
