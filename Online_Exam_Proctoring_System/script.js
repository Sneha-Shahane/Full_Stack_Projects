const config = {
  project: 'Online Exam Proctoring System',
  entity: 'Session',
  plural: 'Sessions',
  fields: ['Student','Exam','Flags'],
  statuses: ['Clean','Review','Blocked'],
  metric: 'Review flags',
  storageKey: 'Online_Exam_Proctoring_System_records',
  userKey: 'Online_Exam_Proctoring_System_users',
  sessionKey: 'Online_Exam_Proctoring_System_session'
};

const seedItems = [
    { id: crypto.randomUUID(), field1: 'Neha', field2: 'Math', field3: '0', status: 'Clean', owner: 'admin@example.com' },
    { id: crypto.randomUUID(), field1: 'Sam', field2: 'Physics', field3: '2', status: 'Review', owner: 'admin@example.com' }
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
const statusSelect = document.getElementById('status');
const searchInput = document.getElementById('searchInput');
const itemsList = document.getElementById('itemsList');

function getUsers() {
  return JSON.parse(localStorage.getItem(config.userKey)) || defaultUsers;
}

function saveUsers(users) {
  localStorage.setItem(config.userKey, JSON.stringify(users));
}

function getItems() {
  return JSON.parse(localStorage.getItem(config.storageKey)) || seedItems;
}

function saveItems(items) {
  localStorage.setItem(config.storageKey, JSON.stringify(items));
}

function startApp() {
  if (!localStorage.getItem(config.userKey)) saveUsers(defaultUsers);
  if (!localStorage.getItem(config.storageKey)) saveItems(seedItems);
  currentUser = JSON.parse(localStorage.getItem(config.sessionKey));
  fillStatusOptions();
  render();
}

function fillStatusOptions() {
  statusSelect.innerHTML = config.statuses
    .map(status => '<option value="' + status + '">' + status + '</option>')
    .join('');
}

function canManage(item) {
  return currentUser && (currentUser.role === 'Admin' || item.owner === currentUser.email);
}

function visibleItems() {
  const term = searchInput.value.toLowerCase();
  return getItems().filter(item => {
    const allowed = currentUser.role === 'Admin' || item.owner === currentUser.email;
    const matches = Object.values(item).join(' ').toLowerCase().includes(term);
    return allowed && matches;
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

  const allItems = getItems();
  const shown = visibleItems();
  document.getElementById('totalCount').textContent = shown.length;
  document.getElementById('adminCount').textContent = currentUser.role === 'Admin' ? allItems.length : 'User';
  document.getElementById('metricValue').textContent = calculateMetric(shown);

  itemsList.innerHTML = shown.map(item => cardTemplate(item)).join('') || emptyState();
}

function calculateMetric(items) {
  const numberTotal = items.reduce((sum, item) => {
    const value = Number(String(item.field3).replace(/[^0-9.]/g, ''));
    return sum + (isNaN(value) ? 0 : value);
  }, 0);

  if (config.metric.toLowerCase().includes('average') && items.length > 0) {
    return Math.round(numberTotal / items.length);
  }
  return numberTotal || items.filter(item => item.status === config.statuses[1]).length;
}

function cardTemplate(item) {
  const buttons = canManage(item)
    ? '<button onclick="editItem(\'' + item.id + '\')" class="px-3 py-1 bg-amber-100 text-amber-800 rounded text-sm">Edit</button>' +
      '<button onclick="deleteItem(\'' + item.id + '\')" class="px-3 py-1 bg-rose-100 text-rose-800 rounded text-sm">Delete</button>'
    : '';

  return '<article class="border border-slate-200 rounded-lg p-4">' +
    '<div class="flex items-start justify-between gap-3">' +
    '<div>' +
    '<h3 class="font-semibold">' + item.field1 + '</h3>' +
    '<p class="text-sm text-slate-500">' + config.fields[1] + ': ' + item.field2 + '</p>' +
    '<p class="text-sm text-slate-500">' + config.fields[2] + ': ' + item.field3 + '</p>' +
    '</div>' +
    '<span class="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">' + item.status + '</span>' +
    '</div>' +
    '<div class="mt-4 flex gap-2">' + buttons + '</div>' +
    '</article>';
}

function emptyState() {
  return '<p class="text-slate-500">No ' + config.plural.toLowerCase() + ' found.</p>';
}

document.getElementById('signupForm').addEventListener('submit', event => {
  event.preventDefault();
  const users = getUsers();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  if (users.some(user => user.email === email)) {
    alert('Email already exists.');
    return;
  }
  users.push({
    name: document.getElementById('signupName').value.trim(),
    email,
    password: document.getElementById('signupPassword').value,
    role: document.getElementById('signupRole').value
  });
  saveUsers(users);
  alert('Account created. You can login now.');
  event.target.reset();
});

document.getElementById('loginForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const user = getUsers().find(item => item.email === email && item.password === password);
  if (!user) {
    alert('Invalid login details.');
    return;
  }
  currentUser = { name: user.name, email: user.email, role: user.role };
  localStorage.setItem(config.sessionKey, JSON.stringify(currentUser));
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
  const record = {
    id: editId || crypto.randomUUID(),
    field1: document.getElementById('field1').value.trim(),
    field2: document.getElementById('field2').value.trim(),
    field3: document.getElementById('field3').value.trim(),
    status: statusSelect.value,
    owner: editId ? items.find(item => item.id === editId).owner : currentUser.email
  };

  const nextItems = editId
    ? items.map(item => item.id === editId ? record : item)
    : [...items, record];

  saveItems(nextItems);
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
  if (!confirm('Delete this ' + config.entity.toLowerCase() + '?')) return;
  saveItems(getItems().filter(record => record.id !== id));
  render();
}

searchInput.addEventListener('input', render);
startApp();
