import React from 'react';
import { Form, Button, Input } from '../../components';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { MainState } from '../../MainContext';

import './LoginPage.scss';
import Logo from '../../components/Logo';
import { FormTitle } from '../../components/Form/Form';
import { useAppDispatch } from '../../hooks/typedDispatch';
import { setUser } from '../../store/slices/userSlice';
type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [form, onChange] = useForm<LoginForm>({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUser());
  };

  return (
    <div className="auth-page">
      <Form onSubmit={(e) => submit(e)}>
        <Logo />
        <FormTitle title={'Log In to Dashboard Kit'} subtitle={'Enter your email and password'} />
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
        <Link to="/signup" className="form__change">
          Log In
        </Link>
      </Form>
    </div>
  );
};

export default LoginPage;
