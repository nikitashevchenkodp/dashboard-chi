import React from 'react';
import { Button, Input, Form } from '../../components';
import { FormTitle } from '../../components/Form/Form';
import Logo from '../../components/Logo';
import './ForgotPasswordPage.scss';

const ForgotPasswordPage = () => {
  return (
    <div className="auth-page">
      <Form onSubmit={() => {}}>
        <Logo />
        <FormTitle title={'Forgot password?'} subtitle={'Enter your email from registered account'} />
        <Input id="email" type="text" label={'email'} placeholder={'Email adress'} />
        <Button>Send</Button>
        <span className="form__question">Don't have an account? </span>
        <span className="form__change" onClick={() => {}}>
          Sign Up
        </span>
      </Form>
    </div>
  );
};

export default ForgotPasswordPage;
