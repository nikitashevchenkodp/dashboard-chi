import React, { FC, useState } from 'react';
import { Control, useFieldArray } from 'react-hook-form';
import { Button, Input } from '../../../components';
import Select from '../../../components/Select';
import { DefaultValues, SignUpFormProps } from '../../../utils/consts';

const RelativesForm: FC<SignUpFormProps & { control: Control<DefaultValues> }> = ({ register, control, errors }) => {
  const [error, setError] = useState('');
  const { fields, append } = useFieldArray({
    control,
    name: 'relatives.members',
  });

  const childrenFields = fields?.map((field, i) => {
    return (
      <React.Fragment key={field.id}>
        <Select
          id={`${field.role}${i}`}
          label={'Member of family'}
          placeholder={'choose variant'}
          options={['son', 'daughter', 'sister', 'brother']}
          {...register(`relatives.members.${i}.role`)}
          error={errors?.relatives?.members?.[i]?.role?.message}
        />
        <Input
          id={`${field.fullName}${i}`}
          type="text"
          label="Full Name"
          {...register(`relatives.members.${i}.fullName`)}
          error={errors?.relatives?.members?.[i]?.fullName?.message}
        />
      </React.Fragment>
    );
  });

  const addChildField = () => {
    if (fields.length < 5) {
      append({ role: '', fullName: '' });
    } else {
      setError('You cannot add more than 4 children');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <>
      <Input
        id="fatherFullName"
        type="text"
        label={'Father full name'}
        placeholder={'Father full name'}
        error={errors?.relatives?.fatherFullName?.message}
        {...register('relatives.fatherFullName')}
      />

      <Input
        id="motherFullName"
        type="text"
        label={'Mother full name'}
        placeholder={'Mother full name'}
        error={errors?.relatives?.motherFullName?.message}
        {...register('relatives.motherFullName')}
      />

      {childrenFields}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
        <p style={{ marginRight: '10px' }}>Add more children</p>
        <Button variant="circle" type="button" style={{ width: '40px', height: '40px' }} onClick={addChildField}>
          +
        </Button>
      </div>
      {error && <p>{error}</p>}
    </>
  );
};

export default RelativesForm;
