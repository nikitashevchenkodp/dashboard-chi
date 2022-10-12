import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../../../components';

const AddressForm = ({ control, errors }: { control: any; errors: any }) => {
  return (
    <>
      <Controller
        name="address.country"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="country"
            type="text"
            label={'Country'}
            placeholder={'Type the Country'}
            {...field}
            error={errors?.address?.country?.message}
          />
        )}
      />
      <Controller
        name="address.city"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input id="city" type="text" label="City" {...field} error={errors?.address?.city?.message} />
        )}
      />
      <Controller
        name="address.street"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input id="street" type="text" label="Street" {...field} error={errors?.address?.street?.message} />
        )}
      />
      <Controller
        name="address.build"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input id="build" type="text" label="Build No." {...field} error={errors?.address?.build?.message} />
        )}
      />
      <Controller
        name="address.appartment"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="appartment"
            type="text"
            label="Appartment No."
            {...field}
            error={errors?.address?.appartment?.message}
          />
        )}
      />
    </>
  );
};

export default AddressForm;
