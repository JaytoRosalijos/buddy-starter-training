import React from 'react';
import { Formik } from 'formik';

import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { Wrapper, ErrorWrapper, } from './styles';
import { RegistrationSchema } from './validations';

export type RegistrationFormProps = {
    onRegister: (email: string, password: string) => Promise<void>;
    apiError?: { message: string };
};

const RegistrationForm = ({ 
    onRegister,
    apiError,
}: RegistrationFormProps) => {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        setSubmitting(true);
                        await onRegister(values.email, values.password);
                    } finally {
                        setSubmitting(false);
                    }
                }}
                validationSchema={RegistrationSchema}
                validateOnBlur={true}
                validateOnChange={false}
            >
                {({ 
                    values, 
                    handleChange, 
                    handleSubmit, 
                    handleBlur,
                    errors,
                    touched,
                    isSubmitting,
                }) => ( 
                        <form onSubmit={handleSubmit}>
                            <Wrapper>
                                <TextInput 
                                    name="email" 
                                    title="Email" 
                                    value={values.email} 
                                    onChange={handleChange("email")} 
                                    onBlur={handleBlur}
                                />
                                <TextInput 
                                    name="password" 
                                    title="Password" 
                                    value={values.password} 
                                    onChange={handleChange("password")} 
                                    type="password" 
                                    onBlur={handleBlur}
                                />
                            </Wrapper>
                            <Button block htmlType="submit" disabled={isSubmitting}>Register</Button>
                            <ErrorWrapper>
                                { touched.email && errors.email && <p>{errors.email}</p> }
                                { touched.password && errors.password && <p>{errors.password}</p> }
                                { apiError?.message && <p>{apiError?.message}</p> }
                            </ErrorWrapper>
                        </form>
                    )
                }
            </Formik>
        </div>
    );
}
export default RegistrationForm;
