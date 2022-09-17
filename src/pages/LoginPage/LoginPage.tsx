import React from 'react';
import { Form, Button, Input } from '../../components';
import { useNavigate } from 'react-router-dom';

import './LoginPage.scss';

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
