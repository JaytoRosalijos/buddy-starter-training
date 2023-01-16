import React from 'react';

import { TodoSelectItem } from '../../molecules/TodoSelectItem';
import { Wrapper } from './styles';

export type Todo = {
    id: string | number;
    title: string,
};

export type TodoProps = {
    todos: Todo[];
};


const TodoSelectList = ({ todos }: TodoProps) => {
    return (
        <Wrapper>
            { 
                todos.map(({ id, title }) => 
                    <TodoSelectItem key={id} title={title} />   
                )
            }
        </Wrapper>
    );
};

export default TodoSelectList;