'use server';

import { signInService } from '@/services/authService';
import { SignInPayload } from '@/types/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function onSignInAction(data: any) {
  const payload: SignInPayload = {
    email: data.get('email'),
    password: data.get('password'),
  };
  try {
    const response = await signInService(payload);
    cookies().set('token', response.token);
    cookies().set('refresh-token', response.refreshToken);
    console.log('sign in successfully');
  } catch (error: any) {
    console.log('error in signIn: ' + error.message);
  }
  return redirect('/');
}
