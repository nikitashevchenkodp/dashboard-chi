import React from 'react';
import { Form, Button, Input } from '../../components';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { FormTitle } from '../../components/Form/Form';
import { Controller, useForm } from 'react-hook-form';
import { valueToPercent } from '@mui/base';

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  console.log(errors.firstName);

  const onSubmit = (data: any) => console.log(data);

  // const isValidFirstName = (v: string) => {
  //   return !(v === 'hello');
  // };

  return (
    <div className="auth-page">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <FormTitle title={'Sign Up'} subtitle={'Create a new account'} />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input id="email" type="email" label={'email'} placeholder={'email address'} {...field} />
          )}
        />
        <Controller
          name="firstName"
          control={control}
          // rules={{
          //   maxLength: 15,
          //   required: 'This field is required',
          //   minLength: 3,

          //   validate: {
          //     checkFirstName: (v) => isValidFirstName(v) || 'Not Allowed this name',
          //   },
          // }}
          render={({ field }) => (
            <Input id="firstName" type="text" label={'First name'} placeholder={'First name'} {...field} />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <Input id="lastName" type="text" label={'Last name'} placeholder={'Last name'} {...field} />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input id="password" type="password" label="Password" {...field} />}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => <Input id="confirmPassword" type="password" label="Confirm password" {...field} />}
        />
        <input id="confirmP" type="password" />
        <Button>Sign Up</Button>
        <span className="form__question">Already have an account? </span>
        <Link to="/login" className="form__change">
          Log In
        </Link>
      </Form>
    </div>
  );
};

export default SignUpPage;
