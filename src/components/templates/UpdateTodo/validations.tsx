import * as Yup from 'yup';

export const UpdateTodoSchema = Yup.object().shape({
    title: Yup.string()
            .min(2, "Too short.")
            .max(100, "Too long.")
            .required("Todo must not be empty. Thanks."),
});
