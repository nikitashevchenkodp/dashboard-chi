import React from 'react';
import { Form, Button, Input } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { MainState } from '../../MainContext';

import './LoginPage.scss';
type LoginFormProp = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { authUser } = MainState();
  const [form, onChange] = useForm<LoginFormProp>({
    email: '',
    password: '',
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authUser(true);
  };

  return (
    <div className="auth-page">
      <Form title={'Log In to Dashboard Kit'} subtitle={'Enter your email and password'} onSubmit={(e) => submit(e)}>
        <Input
          id="email"
          type="text"
          label={'email'}
          placeholder={'Email adress'}
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <Input
          id="password"
          type="password"
          name="password"
          label={'Password'}
          value={form.password}
          onChange={onChange}
        />
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