import React from 'react';
import { Form, Button, Input } from '../../components';
import './ResetPasswordPage.scss';

const ResetPasswordPage = () => {
  return (
    <Form title={'Reset Password'} subtitle={'Enter new password'}>
      <Input id="password" type="password" label="New password" />
      <Input id="confirm_password" type="password" label="Confirm new password" />
      <Button>Send</Button>
    </Form>
  );
};

export default ResetPasswordPage;
