import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
    email: Yup.string()
            .email("Incorrect Email Format")
            .required("Email is required."),
    password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});
