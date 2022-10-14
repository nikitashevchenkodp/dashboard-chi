import React, { FC } from 'react';
import { Input } from '../../../components';
import Select from '../../../components/Select';
import { SignUpFormProps } from '../../../utils/consts';

const PersonalInfoForm: FC<SignUpFormProps> = ({ register, errors }) => {
  const maxDate = new Date();
  maxDate.setFullYear(new Date().getFullYear() - 18);
  const minDate = new Date();
  minDate.setFullYear(new Date().getFullYear() - 70);

  return (
    <>
      <Input
        id="firstName"
        type="text"
        label={'First name'}
        placeholder={'First name'}
        {...register('firstName')}
        error={errors.firstName?.message}
      />

      <Input
        id="lastName"
        type="text"
        label={'Last name'}
        placeholder={'Last name'}
        {...register('lastName')}
        error={errors.lastName?.message}
      />

      <Input
        id="dateOfBirth"
        type="date"
        min={minDate.toISOString().slice(0, 10)}
        max={maxDate.toISOString().slice(0, 10)}
        label={'Date of Birth'}
        {...register('dateOfBirth')}
        error={errors.dateOfBirth?.message}
      />

      <Select
        id="sex"
        label={'Sex'}
        placeholder={'choose variant'}
        options={['male', 'female', 'other']}
        {...register('sex')}
        error={errors.sex?.message}
      />
    </>
  );
};
export default PersonalInfoForm;
