import React from 'react';
import { Formik } from 'formik';

import { Header } from '../../molecules/Header';
import { TextInput } from '../../atoms/TextInput';
import { ReactComponent as SearchIcon } from '../../atoms/Icons/search.svg';
import { UpdateTodoSchema } from './validations';

import {
    Wrapper,
    SearchWrapper,
} from './styles';
import { TodoType } from '../../../data';


export type UpdateTodoProps = {
    todo: TodoType,
    onUpdateTodo: (id: string, title: string) => void;
    onBack: () => void;
};

const UpdateTodo = ({ todo, onUpdateTodo, onBack }: UpdateTodoProps) => {
    return (
        <Wrapper>
            <Header title="Update to do" type="navigation" onBack={onBack} />
            <SearchWrapper>
                <Formik
                    initialValues={{ title: todo.title }}
                    onSubmit={({ title },) => onUpdateTodo(todo.id, title)}
                    validationSchema={UpdateTodoSchema}
                >
                    {
                        ({ 
                            values, 
                            errors, 
                            handleChange, 
                            handleSubmit, 
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <TextInput 
                                    value={values.title}
                                    prefix={<SearchIcon />} 
                                    onChange={handleChange("title")} 
                                    allowClear 
                                    maxLength={50}
                                />
                                {
                                    errors.title && <div>{errors.title}</div>
                                }
                            </form>
                        )
                    }
                </Formik>
            </SearchWrapper>
        </Wrapper>
    );
};

export default UpdateTodo; 