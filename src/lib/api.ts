const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export function getToken() {
  return localStorage.getItem('admin_token');
}

export function authHeaders(isFormData = false) {
  const h: Record<string, string> = { Authorization: `Bearer ${getToken()}` };
  if (!isFormData) h['Content-Type'] = 'application/json';
  return h;
}

export async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${BASE}${path}`, options);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || 'Request failed');
  }
  return res.json();
}
