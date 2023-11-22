import * as yup from 'yup';

//const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    login: yup.string().email('Неверный формат логина').required('req'),
    password: yup
                .string()
                .min(8)
                //.matches(passwordRules, {message: 'create a strong password'})
                .required('req')
});