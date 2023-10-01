export interface SignUpPayload {
  username: string;
  password: string;
  email: string;
  bio: string;
  phone: string;
  image: number;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}
