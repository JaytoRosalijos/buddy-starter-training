import React from 'react';
import { Formik } from 'formik';

import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { Wrapper, ErrorWrapper, } from './styles';
import { RegistrationSchema } from './validations';

export type RegistrationFormProps = {
    onRegister: (email: string, password: string) => Promise<void>;
};

const RegistrationForm = ({ 
    onRegister,
}: RegistrationFormProps) => {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={values => onRegister(values.email, values.password)}
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
                            <Button block htmlType="submit">Register</Button>
                            <ErrorWrapper>
                                { touched.email && errors.email && <p>{errors.email}</p> }
                                { touched.password && errors.password && <p>{errors.password}</p> }
                            </ErrorWrapper>
                        </form>
                    )
                }
            </Formik>
        </div>
    );
}
export default RegistrationForm;
