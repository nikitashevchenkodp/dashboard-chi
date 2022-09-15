import React from 'react';
import { useState } from 'react';
import ForgotPassword from '../../components/forgot-password/forgot-password';
import LogIn from '../../components/login';
import ResetPassword from '../../components/reset-password/reset-password';
import SignUp from '../../components/signup/signin';

import './login-page.scss';
type State = 'login' | 'signup' | 'forgotPass' | 'resetPass';

const LoginPage = () => {
  const [kindOfForm, setKindOfForm] = useState<State>('login');

  return (
    <div className="login-page">
      {kindOfForm === 'login' && <LogIn changeForm={() => setKindOfForm('signup')} />}
      {kindOfForm === 'signup' && <SignUp changeForm={() => setKindOfForm('login')} />}
      {kindOfForm === 'forgotPass' && <ResetPassword changeForm={() => setKindOfForm('resetPass')} />}
      {kindOfForm === 'resetPass' && <ForgotPassword changeForm={() => setKindOfForm('forgotPass')} />}
    </div>
  );
};

export default LoginPage;
