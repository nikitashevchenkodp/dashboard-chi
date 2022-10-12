import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Button, Input } from '../../../components';
import Select from '../../../components/Select';

const RelativesForm = ({ control, errors }: { control: any; errors: any }) => {
  const [fields, setFields] = useState(['child']);
  const [error, setError] = useState('');

  const childrenFields = fields?.map((field, i) => {
    return (
      <React.Fragment key={`${field}${i}`}>
        <Controller
          name={`relatives.members[${i}].role`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              id="memberOfFamily"
              label={'Member of family'}
              placeholder={'choose variant'}
              options={['son', 'daughter', 'sister', 'brother']}
              {...field}
              error={errors?.relatives?.members[i]?.role?.message}
            />
          )}
        />
        <Controller
          name={`relatives.members[${i}].fullName`}
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Input
              id={`${field}${1}`}
              type="text"
              label="Full Name"
              {...field}
              error={errors?.relatives?.members[i]?.fullName?.message}
            />
          )}
        />
      </React.Fragment>
    );
  });

  const addChildField = () => {
    if (fields.length < 5) {
      setFields((fields) => [...fields, 'member']);
    } else {
      setError('You cannot add more than 4 children');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <>
      <Controller
        name="relatives.fatherFullName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="fatherFullName"
            type="text"
            label={'Father full name'}
            placeholder={'Father full name'}
            error={errors?.relatives?.fatherFullName?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="relatives.motherFullName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="motherFullName"
            type="text"
            label={'Mother full name'}
            placeholder={'Mother full name'}
            error={errors?.relatives?.motherFullName?.message}
            {...field}
          />
        )}
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
