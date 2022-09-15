import React from 'react';
import Button from '../button';
import Form from '../form';
import Input from '../input';

const ForgotPassword = ({ changeForm }: { changeForm: () => void }) => {
  return (
    <Form
      title={'Forgot password?'}
      subtitle={'Enter your email from registered account'}
      question={'Don’t have an account?'}
      change={'Sign Up'}
      onSubmit={() => {}}
    >
      <Input type="text" label={'email'} placeholder={'Email adress'} />
      <Button>Send</Button>
      <span className="form__question">Don't have an account? </span>
      <span className="form__change" onClick={changeForm}>
        Sign Up
      </span>
    </Form>
  );
};

export default ForgotPassword;
