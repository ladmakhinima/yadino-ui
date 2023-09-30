export function signUpService(data: any) {
  return fetch('http://localhost:3000/api/v1/auth/signup', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}
