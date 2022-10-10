import * as yup from 'yup';

const errorMessages = {
  required: 'This filed is required',
  string: 'It must be string',
  min: 'Must be at least 3 characters',
  max: 'Must be at most 15 characters',
  oneOf: "Choose 'male', 'female' or 'other",
  date: 'Choose your date of birth',
  email: 'Email have to be correct',
};

export const schema = yup.object().shape({
  firstName: yup.string().min(3, errorMessages.min).max(15, errorMessages.max).required(),
  lastName: yup.string().min(3, errorMessages.min).max(15, errorMessages.max).required(),
  dateOfBirth: yup.date().required().typeError(errorMessages.date),
  sex: yup.string().oneOf(['male', 'female', 'other'], errorMessages.oneOf),
  address: yup.object().shape({
    country: yup.string().min(3, errorMessages.min).max(15, errorMessages.max).required(),
    city: yup.string().min(3, errorMessages.min).max(15, errorMessages.max).required(),
    street: yup.string().max(30, errorMessages.max).required(),
    build: yup.string().max(5, errorMessages.max).required(),
    appartment: yup.string().max(5, errorMessages.max).required(),
  }),
  relatives: yup.object().shape({
    motherFullName: yup.string().min(3, errorMessages.min).max(30, errorMessages.min).required(),
    fatherFullName: yup.string().min(3, errorMessages.min).max(30, errorMessages.min).required(),
    members: yup.array(
      yup.object({
        role: yup.string().oneOf(['son', 'daughter', 'sister', 'brother']),
        fullName: yup.string().min(3, errorMessages.min).max(30, errorMessages.min).required(),
      })
    ),
  }),
  email: yup.string().email(errorMessages.email).required(),
  password: yup.string().min(8, errorMessages.min).max(16, errorMessages.max).required(),
  confirmPassword: yup
    .string()
    .min(8, errorMessages.min)
    .max(16, errorMessages.max)
    .oneOf([yup.ref('password'), null])
    .required(),
});
