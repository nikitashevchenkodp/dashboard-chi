import * as yup from 'yup';

export const addTicketSchema = yup.object().shape({
  details_text: yup
    .string()
    .required()
    .min(3, 'Must contain at least 3 characters')
    .max(50, 'Must be at most 15 characters'),
  name: yup.string().required().min(3, 'Must contain at least 3 characters').max(30, 'Must be at most 15 characters'),
  date: yup.date().required().typeError('Choose your date of birth'),
  status: yup.string().oneOf(['high', 'normal', 'low'], "Choose 'high', 'normal', 'low'"),
  image: yup
    .mixed()
    .test(
      'image',
      'The image size must be less then 2MB',
      (val: Array<File>) => val?.[0]?.size < 2000000 || typeof val === 'string'
    ),
});
