import React from 'react';
import { TodoType } from '../../../data';

import { TodoSelectItem } from '../../molecules/TodoSelectItem';
import { Wrapper } from './styles';

export type TodoProps = {
    todos: TodoType[];
    onSelectedTodo: (todo: TodoType) => void,
    selectedIds: string[],
};

const TodoSelectList = ({ todos, onSelectedTodo, selectedIds }: TodoProps) => {
    return (
        <Wrapper>
            { 
                todos.map(todo => 
                    <TodoSelectItem 
                        key={todo.id} 
                        title={todo.title} 
                        isChecked={selectedIds.includes(todo.id)} 
                        onChange={() => onSelectedTodo(todo)} 
                     />   
                )
            }
        </Wrapper>
    );
};

export default TodoSelectList;