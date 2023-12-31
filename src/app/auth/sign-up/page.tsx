'use client';

import Link from 'next/link';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { onSignupAction } from './actions';

export default function SignUpPage() {
  const { pending } = useFormStatus();

  return (
    <div>
      <h1>This is signup page</h1>
      <Link href="/auth/sign-in">Login</Link>

      <form action={onSignupAction}>
        <div>
          <label>image</label>
          <br />
          <input type="file" name="image" />
        </div>
        <div>
          <label>username</label>
          <br />
          <input type="text" name="username" />
        </div>
        <div>
          <label>email</label>
          <br />
          <input type="email" name="email" />
        </div>
        <div>
          <label>password</label>
          <br />
          <input type="password" name="password" />
        </div>
        <div>
          <label>phone</label>
          <br />
          <input type="text" name="phone" />
        </div>
        <div>
          <label>bio</label>
          <br />
          <textarea rows={2} name="bio"></textarea>
        </div>
        <button disabled={pending}>
          {pending ? 'loading ...' : 'sign up'}
        </button>
      </form>
    </div>
  );
}
