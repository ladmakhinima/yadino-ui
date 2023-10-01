import { AuthResponse, SignInPayload, SignUpPayload } from '@/types/auth';

export function signUpService(data: SignUpPayload) {
  return fetch('http://localhost:3000/api/v1/auth/signup', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()) as Promise<AuthResponse>;
}

export function signInService(data: SignInPayload) {
  return fetch('http://localhost:3000/api/v1/auth/signin', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()) as Promise<AuthResponse>;
}
