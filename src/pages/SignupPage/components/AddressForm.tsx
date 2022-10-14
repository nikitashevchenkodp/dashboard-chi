import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../../../components';
import { SignUpFormProps } from '../../../utils/consts';

const AddressForm: FC<SignUpFormProps> = ({ register, errors }) => {
  return (
    <>
      <Input
        id="country"
        type="text"
        label={'Country'}
        placeholder={'Type the Country'}
        {...register('address.country')}
        error={errors?.address?.country?.message}
      />
      =
      <Input id="city" type="text" label="City" {...register('address.city')} error={errors?.address?.city?.message} />
      <Input
        id="street"
        type="text"
        label="Street"
        {...register('address.street')}
        error={errors?.address?.street?.message}
      />
      <Input
        id="build"
        type="text"
        label="Build No."
        {...register('address.build')}
        error={errors?.address?.build?.message}
      />
      <Input
        id="appartment"
        type="text"
        label="Appartment No."
        {...register('address.appartment')}
        error={errors?.address?.appartment?.message}
      />
    </>
  );
};

export default AddressForm;
