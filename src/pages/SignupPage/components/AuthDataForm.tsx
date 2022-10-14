import { Checkbox } from '@mui/material';
import React, { FC } from 'react';
import { Input } from '../../../components';
import { SignUpFormProps } from '../../../utils/consts';

const AuthinfoForm: FC<SignUpFormProps> = ({ register, errors }) => {
  return (
    <>
      <Input
        id="email"
        type="text"
        label={'email'}
        placeholder={'email address'}
        {...register('email')}
        error={errors?.email?.message}
      />

      <Input
        id="password"
        type="password"
        label="Password"
        {...register('password')}
        error={errors?.password?.message}
      />
      <Input
        id="confirmPassword"
        type="password"
        label="Confirm password"
        {...register('confirmPassword')}
        error={errors?.confirmPassword?.message}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox {...register('terms')} />

        <p>I agree with all terms</p>
      </div>
    </>
  );
};

export default AuthinfoForm;
