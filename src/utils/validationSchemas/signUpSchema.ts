import * as yup from 'yup';

// const errorMessages = {
//   required: 'This filed is required',
//   string: 'It must be string',
//   min: 'Must be at least 3 characters',
//   max: 'Must be at most 15 characters',
//   oneOf: "Choose 'male', 'female' or 'other",
//   date: 'Choose your date of birth',
//   email: 'Email have to be correct',
// };

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .min(3, 'Must contain at least 3 characters')
    .max(15, 'Must be at most 15 characters'),
  lastName: yup
    .string()
    .required()
    .min(3, 'Must contain at least 3 characters')
    .max(15, 'Must be at most 15 characters'),
  dateOfBirth: yup.date().required().typeError('Choose your date of birth'),
  sex: yup.string().oneOf(['male', 'female', 'other'], "Choose 'male', 'female' or 'other"),
  address: yup.object({
    country: yup
      .string()
      .required()
      .min(3, 'Must contain at least 3 characters')
      .max(15, 'Must be at most 15 characters'),
    city: yup.string().min(3, 'Must contain at least 3 characters').max(15, 'Must be at most 15 characters'),
    street: yup.string().required().max(30, 'Must be at most 30 characters'),
    build: yup.number().required().max(10000, 'Cannot be more than 10000').typeError('must be a number'),
    appartment: yup.number().required().max(10000, 'Cannot be more than 10000'),
  }),
  relatives: yup.object().shape({
    motherFullName: yup
      .string()
      .required()
      .min(3, 'Must contain at least 3 characters')
      .max(30, 'Must be at most 30 characters'),
    fatherFullName: yup
      .string()
      .required()
      .min(3, 'Must contain at least 3 characters')
      .max(30, 'Must be at most 30 characters'),
    members: yup.array(
      yup.object({
        role: yup.string().oneOf(['son', 'daughter', 'sister', 'brother']),
        fullName: yup
          .string()
          .required()
          .min(3, 'Must contain at least 3 characters')
          .max(30, 'Must be at most 30 characters'),
      })
    ),
  }),
  email: yup.string().required().email('Email have to be correct'),
  password: yup
    .string()
    .required()
    .min(8, 'Must contain at least 8 characters')
    .max(16, 'Must be at most 30 characters'),
  confirmPassword: yup
    .string()
    .required()
    .min(8, 'Must contain at least 8 characters')
    .max(16, 'Must be at most 16 characters')
    .oneOf([yup.ref('password'), null], 'Passwords are not equal'),
  terms: yup.boolean().required(),
});
