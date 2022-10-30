import * as yup from 'yup';

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

export const schemaContactForm = yup.object().shape({
  name: yup
    .string()
    .required('This field is required')
    .min(3, 'Enter more than 3 characters')
    .max(25),
  number: yup
    .string()
    .required('This field is required')
    .matches(phoneRegex, 'Invalid phone'),
});
