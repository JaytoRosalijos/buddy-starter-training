import * as Yup from 'yup';

export const AddTodoSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, "Too short.")
        .max(100, "Too long.")
        .required("Todo must not be empty. Thanks."),
});
