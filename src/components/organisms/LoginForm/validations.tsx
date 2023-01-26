import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
            .email("Incorrect Email Format")
            .required("Email is required."),
    password: Yup.string()
            .required("No password provided."),
});
