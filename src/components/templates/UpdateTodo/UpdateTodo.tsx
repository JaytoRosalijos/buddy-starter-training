import React, { useState } from 'react';

import { Header } from '../../molecules/Header';
import { TextInput } from '../../atoms/TextInput';
import { ReactComponent as SearchIcon } from '../../atoms/Icons/search.svg';

import {
    Wrapper,
    SearchWrapper,
} from './styles';
import { TodoType } from '../../../data';

export type UpdateTodoProps = {
    todo: TodoType,
    onUpdateTodo: (e: TodoType) => void;
    onBack: () => void;
};

const UpdateTodo = ({ todo, onUpdateTodo, onBack }: UpdateTodoProps) => {
    const [updatedTodo, setUpdatedTodo] = useState<TodoType>({ ...todo });

    const onPressEnterHandler = () => {
        onUpdateTodo(updatedTodo);
    };

    return (
        <Wrapper>
            <Header title="Update to do" type="navigation" onBack={onBack} />
            <SearchWrapper>
                <TextInput 
                    value={updatedTodo.title}
                    prefix={<SearchIcon />} 
                    onChange={e => setUpdatedTodo({ ...todo, title: e.currentTarget.value })} 
                    onPressEnter={onPressEnterHandler} 
                    allowClear 
                />
            </SearchWrapper>
        </Wrapper>
    );
};

export default UpdateTodo; 