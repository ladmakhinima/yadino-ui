'use server';

import { signUpService } from '@/services/authService';
import { uploadSingleFileService } from '@/services/fileService';
import { FileType } from '@/types/common';

export async function onSignupAction(data: any) {
  //   const formdata = new FormData();
  //   formdata.append('username', data.get('username'));
  //   formdata.append('password', data.get('password'));
  //   formdata.append('email', data.get('email'));
  //   formdata.append('phone', data.get('phone'));
  //   formdata.append('image', data.get('image'));
  //   formdata.append('bio', data.get('bio'));
  //   const response = await signUpService(formdata);
  //   console.log(response);

  const uploadImageFormData = new FormData();
  uploadImageFormData.append('file', data.get('image'));
  uploadImageFormData.append('type', FileType.IMAGE);
  const file = await uploadSingleFileService(uploadImageFormData);
  console.log(file);
}
