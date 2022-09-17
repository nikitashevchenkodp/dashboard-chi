import React from 'react';
import { Form, Button, Input } from '../../components';
import './ResetPasswordPage.scss';

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
