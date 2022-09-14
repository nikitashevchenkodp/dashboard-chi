import React from 'react';
import Button from '../button';
import Form from '../form';
import Input from '../input';
const SignUp = () => {
  return (
    <Form title={'Sign Up'} subtitle={'Create a new account'}>
      <Input type="email" label={'email'} placeholder={'email address'} />
      <Input type="text" label={'First name'} placeholder={'First name'} />
      <Input type="text" label={'Last name'} placeholder={'Last name'} />
      <Input type="password" />
      <Input type="password" />
      <Button>Sign Up</Button>
    </Form>
  );
};

export default SignUp;
