import React, { useState } from 'react';
import Form from '../form';
import Input from '../input';
import Button from '../button';
import './login.scss';

const LogIn = () => {
  return (
    <Form
      title={'Log In to Dashboard Kit'}
      subtitle={'Enter your email and password'}
      question={'Don’t have an account?'}
      change={'Sign Up'}
    >
      <Input type="text" label={'email'} placeholder={'Email adress'} />
      <Input type="password" />
      <Button>Log In</Button>
    </Form>
  );
};

export default LogIn;
