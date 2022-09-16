import React from 'react';
import Button from '../../components/button';
import Form from '../../components/form';
import Input from '../../components/input';
import { useNavigate } from 'react-router-dom';

import './login-page.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Form title={'Log In to Dashboard Kit'} subtitle={'Enter your email and password'} onSubmit={() => {}}>
      <Input type="text" label={'email'} placeholder={'Email adress'} name="email" />
      <Input type="password" name="password" />
      <Button>Log In</Button>
      <span className="form__question">Don't have an account? </span>
      <span className="form__change" onClick={() => navigate('/signup')}>
        Sign Up
      </span>
    </Form>
  );
};

export default LoginPage;
