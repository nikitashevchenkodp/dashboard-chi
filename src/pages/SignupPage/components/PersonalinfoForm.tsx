import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../../../components';
import Select from '../../../components/Select';

const PersonalInfoForm = ({ control, errors }: { control: any; errors: any }) => {
  const maxDate = new Date();
  maxDate.setFullYear(new Date().getFullYear() - 18);
  const minDate = new Date();
  minDate.setFullYear(new Date().getFullYear() - 70);

  return (
    <>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="firstName"
            type="text"
            label={'First name'}
            placeholder={'First name'}
            {...field}
            error={errors?.firstName?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="lastName"
            type="text"
            label={'Last name'}
            placeholder={'Last name'}
            {...field}
            error={errors?.lastName?.message}
          />
        )}
      />

      <Controller
        name="dateOfBirth"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="dateOfBirth"
            type="date"
            min={minDate.toISOString().slice(0, 10)}
            max={maxDate.toISOString().slice(0, 10)}
            label={'Date of Birth'}
            {...field}
            error={errors?.dateOfBirth?.message}
          />
        )}
      />
      <Controller
        name="sex"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            id="sex"
            label={'Sex'}
            placeholder={'choose variant'}
            options={['male', 'female', 'other']}
            {...field}
            error={errors?.sex?.message}
          />
        )}
      />
    </>
  );
};
export default PersonalInfoForm;
