import React from 'react';

import { TodoListItem } from '../../molecules/TodoListItem';
import { Wrapper } from './styles';
import { TodoType } from '../../../data';
import { TodoListItemStatus } from '../../molecules/TodoListItem/TodoListItem';

export type TodoListProps = {
    todos: TodoType[];
    status: TodoListItemStatus;
    activeId: string | null;
    onToBeDeleteTodo: (todo: TodoType) => void;
    onUpdateTodo: (todo: TodoType) => void;
    onClickKebabMenu: (todo: TodoType) => void;
    onClickOutsideKebabMenu?: () => void;
};

const TodoList = ({ 
        todos, 
        onToBeDeleteTodo, 
        onUpdateTodo,
        status,
        activeId,
        onClickKebabMenu,
        onClickOutsideKebabMenu,
    }: TodoListProps) => {
    
    return (
        <Wrapper>
            { 
                todos.map(todo => 
                    <TodoListItem 
                        key={todo.id} 
                        title={todo.title} 
                        status={ activeId === todo.id ? status : "normal" } 
                        onClickKebabMenu={() => onClickKebabMenu(todo)} 
                        onClickOutsideKebabMenu={onClickOutsideKebabMenu}
                        onDeleteTodo={()=> onToBeDeleteTodo(todo)}
                        onUpdateTodo={() => onUpdateTodo(todo)}
                    />   
                )
            }
        </Wrapper>
    );
};

export default TodoList;