import React from 'react';
import Button from '../../components/button';
import Form from '../../components/form';
import Input from '../../components/input';

const ResetPasswordPage = () => {
  return (
    <Form title={'Reset Password'} subtitle={'Enter new password'}>
      <Input type="password" />
      <Input type="password" />
      <Button>Send</Button>
    </Form>
  );
};

export default ResetPasswordPage;
