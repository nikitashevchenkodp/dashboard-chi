import React from 'react';
import { Button, Input, Form } from '../../components';
import './ForgotPasswordPage.scss';

const ForgotPasswordPage = () => {
  return (
    <Form title={'Forgot password?'} subtitle={'Enter your email from registered account'} onSubmit={() => {}}>
      <Input type="text" label={'email'} placeholder={'Email adress'} />
      <Button>Send</Button>
      <span className="form__question">Don't have an account? </span>
      <span className="form__change" onClick={() => {}}>
        Sign Up
      </span>
    </Form>
  );
};

export default ForgotPasswordPage;
