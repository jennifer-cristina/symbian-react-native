import * as yup from 'yup';

export const patientRegisterDataSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(20, 'No máximo 20 caracteres')
        .required('Insira o nome completo '),
    phone: yup
        .string()
        .min(14, 'Insira um número válido')
        .max(15, 'Insira um número válido')
        .required('Insira um telefone '),
    mobile: yup
        .string()
        .min(14, 'Insira um número válido')
        .max(15, 'Insira um número válido')
        .required('Insira um celular '),
    email: yup
        .string()
        .email('Insira um email válido')
        .required('Insira um email'),
    nameResponsible: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(20, 'No máximo 20 caracteres'),
    phoneResponsible: yup
        .string()
        .min(14, 'Insira um número válido')
        .max(15, 'Insira um número válido'),
})
