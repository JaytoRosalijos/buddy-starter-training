import React, { useState } from 'react';
import { Formik } from 'formik';

import { Header } from '../../molecules/Header';
import { TextInput } from '../../atoms/TextInput';
import { ReactComponent as SearchIcon } from '../../atoms/Icons/search.svg';
import { Toast } from '../../atoms/Toast';
import { AddTodoSchema } from './validations';

import {
    Wrapper,
    SearchWrapper,
} from './styles';


export type AddTodoProps = {
    onAddTodo: (title: string) => void;
    onBack: (e: any) => void;
};

const AddTodo = ({ onAddTodo, onBack, }: AddTodoProps) => {
    const [showToast, setShowToast] = useState(false);

    const onSubmitHandler = (title: string) => {
        onAddTodo(title);
        setShowToast(true);
    };

    return (
        <Wrapper>
            <Header title="Add to do" type="navigation" onBack={onBack} />
            <SearchWrapper>
                <Formik
                    initialValues={{ title: "" }}
                    onSubmit={({ title }, { resetForm }) => {
                        onSubmitHandler(title);
                        resetForm({ values: { title: "" } });
                    }}
                    validationSchema={AddTodoSchema}
                >
                    {({ 
                            values, 
                            errors, 
                            handleChange, 
                            handleSubmit, 
                        }) =>  (
                            <form onSubmit={handleSubmit}>
                                <TextInput 
                                    value={values.title}
                                    prefix={<SearchIcon />} 
                                    onChange={handleChange("title")} 
                                    maxLength={100} 
                                    allowClear 
                                />
                                {
                                    errors.title && <div>{errors.title}</div>
                                }
                            </form>
                        )
                    }
                </Formik>
            </SearchWrapper>
            <Toast 
                message="To do saved" 
                duration={1} 
                show={showToast} 
                onClose={() => setShowToast(false)} 
            />
        </Wrapper>
    );
};

export default AddTodo; 