import React from 'react';
import { Form, Button, Input } from '../../components';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <Form title={'Sign Up'} subtitle={'Create a new account'} onSubmit={() => {}}>
        <Input id="email" type="email" label={'email'} placeholder={'email address'} />
        <Input id="first_name" type="text" label={'First name'} placeholder={'First name'} />
        <Input id="last_name" type="text" label={'Last name'} placeholder={'Last name'} />
        <Input id="password" type="password" label="Password" />
        <Input id="confirm_password" type="password" label="Confirm password" />
        <Button>Sign Up</Button>
        <span className="form__question">Already have an account? </span>
        <button className="form__change" onClick={() => navigate('/login')}>
          Log In
        </button>
      </Form>
    </div>
  );
};

export default SignUpPage;
