import React from 'react';
import Button from '../button';
import Form from '../form';
import Input from '../input';
const SignUp = ({ changeForm }: { changeForm: () => void }) => {
  return (
    <Form title={'Sign Up'} subtitle={'Create a new account'} onSubmit={() => {}}>
      <Input type="email" label={'email'} placeholder={'email address'} />
      <Input type="text" label={'First name'} placeholder={'First name'} />
      <Input type="text" label={'Last name'} placeholder={'Last name'} />
      <Input type="password" />
      <Input type="password" />
      <Button>Sign Up</Button>
      <span className="form__question">Already have an account? </span>
      <span className="form__change" onClick={changeForm}>
        Log In
      </span>
    </Form>
  );
};

export default SignUp;
