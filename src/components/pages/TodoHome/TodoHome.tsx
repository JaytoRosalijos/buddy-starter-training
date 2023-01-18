import React from 'react';
import { TodoHome as TodoHomeTemplate } from '../../templates/TodoHome';
import { useTodoContext } from '../../../hooks';
import { TodoType } from '../../../data';

const TodoHome = () => {
    const { todos, deleteTodo, } = useTodoContext();

    const onAddTodo = () => {
        alert("Redirect to Add Todo Page: ");
    };

    const onUpdateTodo = (todo: TodoType) => {
        alert(`Title ${todo.title} Redirect to Todo Update Page...`);
    };

    const onSearch = () => {
        alert("Redirect to Todo Search Page...");
    };

    const onSelect = () => {
        alert("Redirect to Select Page...");
    };

    const onLogout = () => {
        alert("Redirect to Logout Page...");
    };
    
    return (
        <div>
            <TodoHomeTemplate 
                todos={todos} 
                deleteTodo={deleteTodo}
                onAddTodo={onAddTodo}
                onUpdateTodo={onUpdateTodo}
                onSearch={onSearch}
                onSelect={onSelect}
                onLogout={onLogout}
            />
        </div>
    );
};

export default TodoHome;