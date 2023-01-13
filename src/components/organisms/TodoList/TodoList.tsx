import React from 'react';

import { TodoListItem } from '../../molecules/TodoListItem';
import { Wrapper } from './styles';
import { TodoType } from '../../../data';

export type TodoListProps = {
    todos: TodoType[];
};

const TodoList = ({ todos }: TodoListProps) => {
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