import React from 'react';
import { Form, Button, Input } from '../../components';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { FormTitle } from '../../components/Form/Form';

const SignUpPage = () => {
  return (
    <div className="auth-page">
      <Form onSubmit={() => {}}>
        <Logo />
        <FormTitle title={'Sign Up'} subtitle={'Create a new account'} />
        <Input id="email" type="email" label={'email'} placeholder={'email address'} />
        <Input id="first_name" type="text" label={'First name'} placeholder={'First name'} />
        <Input id="last_name" type="text" label={'Last name'} placeholder={'Last name'} />
        <Input id="password" type="password" label="Password" />
        <Input id="confirm_password" type="password" label="Confirm password" />
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
