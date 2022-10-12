import React, { useState } from 'react';
import { Form, Button } from '../../components';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { FormTitle } from '../../components/Form/Form';
import { useForm } from 'react-hook-form';
import { Step, StepLabel, Stepper } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/schema';
import { useAppDispatch, useAppSelector } from '../../hooks/typedDispatch';
import { sagaActions } from '../../store/saga/saga-actions';
import AuthinfoForm from './components/AuthDataForm';
import RelativesForm from './components/RelativesForm';
import AddressForm from './components/AddressForm';
import PersonalInfoForm from './components/PersonalinfoForm';
import { loginUser } from '../../store/slices/userSlice';

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
    dispatch(loginUser());
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
          {step === 4 && <AuthinfoForm control={control} errors={errors} />}
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
