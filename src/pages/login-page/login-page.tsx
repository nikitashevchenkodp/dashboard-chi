import React from 'react';
import { useState } from 'react';
import ForgotPassword from '../../components/forgot-password/forgot-password';
import LogIn from '../../components/login';
import ResetPassword from '../../components/reset-password/reset-password';
import SignUp from '../../components/signup/signin';

import './login-page.scss';

const LoginPage = () => {
  return (
    <div className="login-page">
      <LogIn />
      <SignUp />
      <ResetPassword />
      <ForgotPassword />
    </div>
  );
};

export default LoginPage;
