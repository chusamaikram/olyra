import * as Yup from 'yup'

export const complaintSchema = Yup.object({
    title: Yup.string()
        .min(5)
        .max(100)
        .required('Title is required'),

    category: Yup.string(),

    description: Yup.string()
        .min(10)
        .max(1000)
        .required('Description is required'),

    includeEmail: Yup.boolean(),

    email: Yup.string()
        .email('Invalid email')
        .when('includeEmail', {
            is: true,
            then: (schema) => schema.required('Email is required'),
            otherwise: (schema) => schema.strip()
        })
})