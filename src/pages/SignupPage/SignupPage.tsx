import React, { useState } from 'react';
import { Form, Button, Input } from '../../components';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { FormTitle } from '../../components/Form/Form';
import { Controller, useForm } from 'react-hook-form';
import { Checkbox, Step, StepLabel, Stepper } from '@mui/material';
import Select from '../../components/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/schema';
import { useAppDispatch, useAppSelector } from '../../hooks/typedDispatch';
import { sagaActions } from '../../store/saga/saga-actions';

const steps = ['Personal info', 'Address', 'Relatives info', 'Other info'];
const maxSteps = steps.length;

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const { loading } = useAppSelector((state) => state.user);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const submit = (data: any) => {
    console.log(data);
    dispatch({ type: sagaActions.LOGIN_USER_SAGA });
  };

  return (
    <div className="auth-page">
      <Form onSubmit={handleSubmit(submit)}>
        <Logo />
        <FormTitle title={'Sign Up'} subtitle={'Create a new account'} />
        <Stepper sx={{ marginBottom: '20px' }} activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <fieldset disabled={loading}>
          {step === 1 && <PersonalInfoForm control={control} errors={errors} />}
          {step === 2 && <AddressForm control={control} errors={errors} />}
          {step === 3 && <RelativesForm control={control} errors={errors} />}
          {step === 4 && <OtherForm control={control} errors={errors} />}
        </fieldset>
        {step + 1 <= maxSteps && (
          <Button
            className="mb-16"
            type="button"
            onClick={() => setStep((prevStep) => prevStep + 1)}
            variant="outlined"
          >
            Next →
          </Button>
        )}
        {step - 1 > 0 && (
          <Button
            className="mb-16"
            variant="outlined"
            type="button"
            onClick={() => setStep((prevStep) => prevStep - 1)}
          >
            ← Back
          </Button>
        )}
        {step === maxSteps && (
          <Button disabled={loading} className="mb-16" onClick={() => console.log(errors)}>
            Submit
          </Button>
        )}
        <span className="form__question">Already have an account? </span>
        <Link to="/login" className="form__change">
          Log In
        </Link>
      </Form>
    </div>
  );
};

export default SignUpPage;

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

const OtherForm = ({ control, errors }: { control: any; errors: any }) => {
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
