const STORAGE_KEY = "skymart.users";
const CURRENT_USER_KEY = "skymart.currentUser";

export function getUsers() {
  const users = localStorage.getItem(STORAGE_KEY);

  return users ? JSON.parse(users) : [];
}

export function findUserByEmail(email) {
  const users = getUsers();

  return users.find((user) => user.email === email);
}

export function registerUser(user) {
  const users = getUsers();

  const existingUser = findUserByEmail(user.email);

  if (existingUser) {
    throw new Error("Email is already exists.");
  }

  users.push(user);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

  return user;
}

export function loginUser(email, password) {
  const user = findUserByEmail(email);

  if (!user) {
    throw new Error("User not found.");
  }

  if (user.password !== password) {
    throw new Error("Incorrect password.");
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

  return user;
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser() {
  const user = localStorage.getItem(CURRENT_USER_KEY);

  return user ? JSON.parse(user) : null;
}
