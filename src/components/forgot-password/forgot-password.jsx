import React from 'react';
import Button from '../button';
import Form from '../form';
import Input from '../input';

const ForgotPassword = () => {
  return (
    <Form
      title={'Forgot password?'}
      subtitle={'Enter your email from registered account'}
      question={'Don’t have an account?'}
      change={'Sign Up'}
    >
      <Input type="text" label={'email'} placeholder={'Email adress'} />
      <Button>Send</Button>
    </Form>
  );
};

export default ForgotPassword;
