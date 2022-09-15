import React from 'react';
import Button from '../button';
import Form from '../form';
import Input from '../input';

const ResetPassword = ({ changeForm }: { changeForm: () => void }) => {
  return (
    <Form
      title={'Reset Password'}
      subtitle={'Enter new password'}
      question={'Don’t have an account?'}
      change={'Sign Up'}
    >
      <Input type="password" />
      <Input type="password" />
      <Button>Send</Button>
    </Form>
  );
};

export default ResetPassword;
