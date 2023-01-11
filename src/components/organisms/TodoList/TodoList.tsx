import React from 'react';

import { TodoListItem } from '../../molecules/TodoListItem';
import { Wrapper } from './styles';

export type Todo = {
    id: string | number;
    title: string,
};

export type TodoProps = {
    todos: Todo[];
};


const TodoList = ({ todos }: TodoProps) => {
    return (
        <Wrapper>
            { 
                todos.map(({ id, title }) => 
                    <TodoListItem key={id} title={title} />   
                )
            }
        </Wrapper>
    );
};

export default TodoList;