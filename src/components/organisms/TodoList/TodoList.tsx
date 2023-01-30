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
    onClickOutsideKebabMenu: () => void;
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

    const determineTodoStatus = (todo: TodoType): TodoListItemStatus => {
        if(todo.isDone)
            return "crushout";
        if(todo.id === activeId)
            return status;
        return "normal"; 
    };

    return (
        <Wrapper>
            { 
                todos.map(todo => 
                    <TodoListItem 
                        key={todo.id} 
                        title={todo.title} 
                        status={determineTodoStatus(todo)} 
                        onClickKebabMenu={() => onClickKebabMenu(todo)} 
                        onClickOutsideKebabMenu={onClickOutsideKebabMenu}
                        onDeleteTodo={()=> onToBeDeleteTodo(todo)}
                        onUpdateTodo={() => onUpdateTodo(todo)}
                        isActiveKebab={todo.id === activeId}
                        showKebab
                    />   
                )
            }
        </Wrapper>
    );
};

export default TodoList;