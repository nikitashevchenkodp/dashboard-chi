import React from 'react';
import Button from '../../components/button';
import Form from '../../components/form';
import Input from '../../components/input';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <Form title={'Sign Up'} subtitle={'Create a new account'} onSubmit={() => {}}>
      <Input type="email" label={'email'} placeholder={'email address'} />
      <Input type="text" label={'First name'} placeholder={'First name'} />
      <Input type="text" label={'Last name'} placeholder={'Last name'} />
      <Input type="password" />
      <Input type="password" />
      <Button>Sign Up</Button>
      <span className="form__question">Already have an account? </span>
      <span className="form__change" onClick={() => navigate('/login')}>
        Log In
      </span>
    </Form>
  );
};

export default SignUpPage;
