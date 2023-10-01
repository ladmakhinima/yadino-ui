'use server';

import { signUpService } from '@/services/authService';
import { uploadSingleFileService } from '@/services/fileService';
import { SignUpPayload } from '@/types/auth';
import { FileType } from '@/types/file';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function onSignupAction(data: any) {
  try {
    const uploadImageFormData = new FormData();
    uploadImageFormData.append('file', data.get('image'));
    uploadImageFormData.append('type', FileType.IMAGE);
    const file = await uploadSingleFileService(uploadImageFormData);
    const signupPayload: SignUpPayload = {
      username: data.get('username'),
      password: data.get('password'),
      email: data.get('email'),
      phone: data.get('phone'),
      image: file.id,
      bio: data.get('bio'),
    };
    const signupResponse = await signUpService(signupPayload);
    cookies().set('token', signupResponse.token, { httpOnly: true });
    cookies().set('refresh-token', signupResponse.refreshToken, {
      httpOnly: true,
    });
    console.log('signup successfully ...');
  } catch (error: any) {
    console.log('signup error :' + error?.message);
  }
  return redirect('/');
}
