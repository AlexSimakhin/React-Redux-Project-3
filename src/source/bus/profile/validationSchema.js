import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  sex: Yup.string().required('Should be provided').oneOf(['f', 'm'], 'You must choose your gender'),
  email: Yup.string().email('Should be valid email').required('Should be provided'),
  fname: Yup.string().max(15, 'Must be 15 chars or less'),
  lname: Yup.string().max(20, 'Must be 20 chars or less'),
  password: Yup.string().required('Should be provided'),
  age: Yup.number().min(0, 'You must be over 6 years old').max(150, 'You are too old').positive(),
  height: Yup.number().positive(),
  weight: Yup.number().positive().required('Should be provided'),
});