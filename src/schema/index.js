import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  secondName: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string()
    .required('required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'to short')
    .max(10, 'to long'),
  Password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password should be 8 chars minimum.')
    .matches(
      /([a-zA-Z])(?=.*[@$!%*#?&])/,
      'Password can only contain one letters and one Special char.',
    ),
  gender: Yup.string().required('Required'),
  terms: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions',
  ),
})
