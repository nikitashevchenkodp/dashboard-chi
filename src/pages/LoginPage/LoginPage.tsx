import React from 'react';
import { Form, Button, Input } from '../../components';
import { useNavigate } from 'react-router-dom';

import './LoginPage.scss';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <Form title={'Log In to Dashboard Kit'} subtitle={'Enter your email and password'} onSubmit={() => {}}>
        <Input id="email" type="text" label={'email'} placeholder={'Email adress'} name="email" />
        <Input id="password" type="password" name="password" label={'Password'} />
        <Button>Log In</Button>
        <span className="form__question">Don't have an account? </span>
        <span className="form__change" onClick={() => navigate('/signup')}>
          Sign Up
        </span>
      </Form>
    </div>
  );
};

export default LoginPage;
