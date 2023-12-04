import { object, string, number, boolean, ref } from 'yup';

const schema = object().shape({
  name: string()
    .required('Required field')
    .matches(/^[A-Z].*$/, 'The first letter should be capital'),
  age: number().required('Required field').positive('Positive number').integer('Integer number'),
  email: string().required('Required field').email(),
  passwordFirst: string()
    .required('Required field')
    .matches(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|=]/, 'The password must have 1 special character')
    .matches(/[0-9]/, 'The password must have 1 number')
    .matches(/[a-z]/, 'The password must have 1 lowercased letter')
    .matches(/[A-Z]/, 'The password must have 1 uppercased letter'),
  passwordSecond: string()
    .required('Please write your password again')
    .oneOf([ref('passwordFirst')], 'The password is different')
    .required(),
  gender: string().required('Required field'),
  country: string().required('Required field'),
  accept: boolean().required('Required field').oneOf([true], 'You must accept'),
});

export default schema;
