import { Checkbox } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../../../components';

const AuthinfoForm = ({ control, errors }: { control: any; errors: any }) => {
  return (
    <>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="email"
            type="text"
            label={'email'}
            placeholder={'email address'}
            {...field}
            error={errors?.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input id="password" type="password" label="Password" {...field} error={errors?.password?.message} />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="confirmPassword"
            type="password"
            label="Confirm password"
            {...field}
            error={errors?.confirmPassword?.message}
          />
        )}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Controller
          name="terms"
          control={control}
          defaultValue="false"
          render={({ field }) => <Checkbox {...field} />}
        />
        <p>I agree with all terms</p>
      </div>
    </>
  );
};

export default AuthinfoForm;
