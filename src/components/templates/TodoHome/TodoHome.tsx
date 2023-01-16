import React from 'react';

import { NoTodo } from '../../molecules/NoTodo';
import { Header } from '../../molecules/Header';
import { TodoList } from '../../organisms/TodoList';
import { Button } from '../../atoms/Button';
import { TextInput } from '../../atoms/TextInput';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { TodoType } from '../../../data';

import {
    Wrapper,
    SearchWrapper,
    TextInputWrapper,
    BodyWrapper,
    NoTodoWrapper,
    FloatButtonWrapper
} from './styles';

export type TodoHomeProps = {
    todos?: TodoType[];
    onAddTodo?: (e: any) => void;
    onSelect?: (e: any) => void;
    onLogout?: (e: any) => void;
    onSearch?: (e: any) => void;
};

const TodoHome = ({ todos = [], onAddTodo, onSelect, onLogout, }: TodoHomeProps) => {
    const isEmpty = todos.length === 0;

    return (
        <Wrapper>
            <Header onLogout={onLogout} />
            <SearchWrapper>
                <TextInputWrapper>
                    <TextInput prefix={<SearchIcon />} />
                </TextInputWrapper>
                <Button variance="secondary" onClick={onSelect}>Select</Button>
            </SearchWrapper>
            <BodyWrapper>
                { 
                    isEmpty ? 
                        (<NoTodoWrapper><NoTodo children="To do list increases productivity." /></NoTodoWrapper>)
                        : <TodoList todos={todos} />
                }
            </BodyWrapper>
            <FloatButtonWrapper>
                <Button icon={<PlusIcon />} onClick={onAddTodo} shape="circle" size="large" />
            </FloatButtonWrapper>
        </Wrapper>
    );
};

export default TodoHome;