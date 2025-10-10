/**
 * Backend API Service
 * Handles all communication with the Torah API backend
 */

const API_BASE_URL = 'https://torah-api-2tvn.onrender.com';

// Simple logger to surface API activity in the browser console (and dev server where applicable)
async function apiFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const method = init?.method || 'GET';
  const url = typeof input === 'string' ? input : input.toString();
  try {
    // Log outgoing request
    console.log('[API] Request:', { method, url, headers: init?.headers, body: safeParse(init?.body) });

    const res = await fetch(input, init);

    // Clone to allow further reading by callers
    const clone = res.clone();
    let payload: any = null;
    try {
      payload = await clone.json();
    } catch {
      payload = await clone.text().catch(() => '<non-text payload>');
    }

    console.log('[API] Response:', { method, url, status: res.status, ok: res.ok, payload });
    return res;
  } catch (err) {
    console.error('[API] Network error:', { method, url, error: err });
    throw err;
  }
}

function safeParse(body: any) {
  if (!body) return undefined;
  try {
    if (typeof body === 'string') return JSON.parse(body);
  } catch {
    // fallthrough
  }
  return body;
}

export interface SignupData {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  password2: string;
}

export interface LoginData {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  user?: {
    username: string;
    email: string;
    firstname?: string;
    lastname?: string;
  };
}

export interface LessonItem {
  id: number;
  title: string;
  content: string;
  topic: number;
  topic_name: string;
  topic_category: string;
  order: number;
  duration_estimate: number;
  created_at: string;
  updated_at: string;
}

export interface Topic {
  id: number;
  name: string;
  category: string;
  description: string;
  lessons: LessonItem[];
}

export interface Lesson {
  id: number;
  name: string;
  [key: string]: any;
}

/**
 * Register a new user
 */
export async function registerUser(data: SignupData): Promise<AuthResponse> {
  const response = await apiFetch(`${API_BASE_URL}/auth/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Registration failed' }));
    console.error('[API] registerUser error:', error);
    throw new Error(error.detail || error.message || 'Registration failed');
  }

  const json = await response.json();
  console.log('[API] registerUser success:', json);
  return json;
}

/**
 * Login user
 */
export async function loginUser(data: LoginData): Promise<AuthResponse> {
  // Endpoint specified without trailing slash
  const response = await apiFetch(`${API_BASE_URL}/auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Login failed' }));
    console.error('[API] loginUser error:', error);
    throw new Error(error.detail || error.message || 'Login failed');
  }

  const json = await response.json();
  console.log('[API] loginUser success:', json);
  return json;
}

/**
 * Get all topics with lessons
 */
export async function getTopics(): Promise<Topic[]> {
  const token = localStorage.getItem('accessToken');
  
  if (!token) {
    throw new Error('No access token found');
  }

  const response = await apiFetch(`${API_BASE_URL}/api/v1/topics/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Failed to fetch topics' }));
    console.error('[API] getTopics error:', error);
    throw new Error(error.detail || error.message || 'Failed to fetch topics');
  }

  const json = await response.json();
  console.log('[API] getTopics success:', json);
  return json;
}

/**
 * Get all lessons (legacy - kept for compatibility)
 */
export async function getLessons(): Promise<Lesson[]> {
  const token = localStorage.getItem('accessToken');
  
  if (!token) {
    throw new Error('No access token found');
  }

  const response = await apiFetch(`${API_BASE_URL}/api/v1/topics/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Failed to fetch lessons' }));
    console.error('[API] getLessons error:', error);
    throw new Error(error.detail || error.message || 'Failed to fetch lessons');
  }

  const json = await response.json();
  console.log('[API] getLessons success:', json);
  return json;
}

/**
 * Store authentication tokens
 */
export function storeTokens(access: string, refresh: string): void {
  localStorage.setItem('accessToken', access);
  localStorage.setItem('refreshToken', refresh);
  console.log('[AUTH] Tokens stored:', { hasAccess: !!access, hasRefresh: !!refresh });
}

/**
 * Get stored access token
 */
export function getAccessToken(): string | null {
  return localStorage.getItem('accessToken');
}

/**
 * Clear authentication tokens
 */
export function clearTokens(): void {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  console.log('[AUTH] Tokens cleared');
}

/**
 * Send a chat message to the backend assistant.
 * Tries POST /api/v1/chat/ with optional Bearer token.
 * Falls back to a mock echo response if the endpoint is missing or returns non-2xx.
 */
export async function sendChatMessage(message: string): Promise<{ reply: string }> {
  const url = `${API_BASE_URL}/api/v1/bot/query/`;
  const token = getAccessToken();
  try {
    const response = await apiFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ message, lesson_id: 5 }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Chat request failed' }));
      console.error('[API] sendChatMessage error:', error);
      // Fallback to mock
      return { reply: `Mock reply: You said "${message}".` };
    }

    const json = await response.json();
    console.log('[API] sendChatMessage success:', json);
    // Server returns { bot_reply: string }
    if (json && typeof json.bot_reply === 'string') return { reply: json.bot_reply };
    // Backwards compatibility
    if (json && typeof json.reply === 'string') return { reply: json.reply };
    // Tolerate other shapes
    return { reply: JSON.stringify(json) };
  } catch (err) {
    console.error('[API] sendChatMessage network error:', err);
    // Fallback to mock on network errors too
    return { reply: `Mock reply: You said "${message}".` };
  }
}
