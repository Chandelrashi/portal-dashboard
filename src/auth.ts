const TOKEN_KEY = 'portal_token';

export type Credentials = { username: string; password: string };

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function isAuthed(): boolean {
  return !!getToken();
}

export function login({ username, password }: Credentials, expected: Credentials): boolean {
  if (username === expected.username && password === expected.password) {
    localStorage.setItem(TOKEN_KEY, btoa(username + ':' + password));
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}
