import React from 'react';
import { TodoType } from '../../../data';
import { TodoListItem } from '../../molecules/TodoListItem';

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
                    (
                        todo.isDone ?
                        <TodoListItem 
                            key={todo.id} 
                            title={todo.title}
                            status="crushout"
                            showKebab={false}
                        />
                        :
                        <TodoSelectItem 
                            key={todo.id} 
                            title={todo.title} 
                            isChecked={selectedIds.includes(todo.id)} 
                            onChange={() => onSelectedTodo(todo)} 
                        />
                    )  
                )
            }
        </Wrapper>
    );
};

export default TodoSelectList;
