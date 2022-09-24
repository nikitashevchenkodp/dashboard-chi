import React from 'react';
import { Form, Button, Input } from '../../components';
import { FormTitle } from '../../components/Form/Form';
import Logo from '../../components/Logo';
import './ResetPasswordPage.scss';

const ResetPasswordPage = () => {
  return (
    <div className="auth-page">
      <Form onSubmit={() => {}}>
        <Logo />
        <FormTitle title={'Reset Password'} subtitle={'Enter new password'} />
        <Input id="password" type="password" label="New password" />
        <Input id="confirm_password" type="password" label="Confirm new password" />
        <Button>Send</Button>
      </Form>
    </div>
  );
};

export default ResetPasswordPage;
