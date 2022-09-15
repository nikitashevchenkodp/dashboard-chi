import React from 'react';
import Form from '../form';
import Input from '../input';
import Button from '../button';
import './login.scss';

const LogIn = ({ changeForm }: { changeForm: () => void }) => {
  return (
    <Form title={'Log In to Dashboard Kit'} subtitle={'Enter your email and password'} onSubmit={() => {}}>
      <Input type="text" label={'email'} placeholder={'Email adress'} name="email" />
      <Input type="password" name="password" />
      <Button>Log In</Button>
      <span className="form__question">Don't have an account? </span>
      <span className="form__change" onClick={changeForm}>
        Sign Up
      </span>
    </Form>
  );
};

export default LogIn;
