import Link from 'next/link';
import { onSignInAction } from './actions';

export default function SignInPage() {
  return (
    <div>
      <h1>This is signin page</h1>
      <Link href="/auth/sign-up">Signup</Link>

      <form action={onSignInAction}>
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
        <button>sign in</button>
      </form>
    </div>
  );
}
