import React from 'react';
import { Form, Button, Input } from '../../components';
import { Link } from 'react-router-dom';

import './LoginPage.scss';
import Logo from '../../components/Logo';
import { FormTitle } from '../../components/Form/Form';
import { useAppDispatch } from '../../hooks/typedDispatch';
import { Controller, useForm } from 'react-hook-form';
import { loginUser } from '../../store/slices/userSlice';

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  console.log(control);
  console.log(register('name'));

  const dispatch = useAppDispatch();

  const submit = (data: any) => {
    dispatch(loginUser());
  };

  return (
    <div className="auth-page">
      <Form onSubmit={handleSubmit(submit)}>
        <Logo />
        <FormTitle title={'Log In to Dashboard Kit'} subtitle={'Enter your email and password'} />
        <Input
          id="email"
          type="text"
          label={'email'}
          placeholder={'Email adress'}
          {...register('email', { required: true })}
          error={errors?.email && 'Email is required field'}
        />
        <Input
          id="password"
          type="password"
          label={'Password'}
          {...register('password', { required: true })}
          error={errors?.password && 'Password is required field'}
        />
        <Button>Log In</Button>
        <span className="form__question">Don't have an account? </span>
        <Link to="/signup" className="form__change">
          Sign Up
        </Link>
      </Form>
    </div>
  );
};

export default LoginPage;
