import React from 'react';
import { Formik } from 'formik';

import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { Wrapper, ErrorWrapper, } from './styles';
import { LoginSchema } from './validations';

export type LoginFormProps = {
    onLogin: (email: string, password: string) => Promise<void>;
    apiError?: { message: string };
};

const LoginForm = ({ 
    onLogin,
    apiError = { message: "" },
}: LoginFormProps) => {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        setSubmitting(true);
                        await onLogin(values.email, values.password)
                    } finally {
                        setSubmitting(false);
                    }
                }}
                validationSchema={LoginSchema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({ 
                    values, 
                    handleChange, 
                    handleSubmit, 
                    errors,
                    isSubmitting,
                }) => ( 
                        <form onSubmit={handleSubmit}>
                            <Wrapper>
                                <TextInput 
                                    name="email" 
                                    title="Email" 
                                    value={values.email} 
                                    onChange={handleChange("email")} 
                                />
                                <TextInput 
                                    name="password" 
                                    title="Password" 
                                    value={values.password} 
                                    onChange={handleChange("password")} 
                                    type="password" 
                                />
                            </Wrapper>
                            <Button block htmlType="submit" disabled={ !values.email || !values.password || isSubmitting }>Login</Button>
                            <ErrorWrapper>
                                { errors.email && <p>{errors.email}</p> }
                                { errors.password && <p>{errors.password}</p> }
                                { apiError?.message && <p>{apiError?.message}</p> }
                            </ErrorWrapper>
                        </form>
                    )
                }
            </Formik>
        </div>
    );
}
export default LoginForm;
