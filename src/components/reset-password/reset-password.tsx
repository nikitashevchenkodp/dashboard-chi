import React from 'react';
import Button from '../button';
import Form from '../form';
import Input from '../input';

const ResetPassword = () => {
  return (
    <Form title={'Reset Password'} subtitle={'Enter new password'}>
      <Input type="password" />
      <Input type="password" />
      <Button>Send</Button>
    </Form>
  );
};

export default ResetPassword;
