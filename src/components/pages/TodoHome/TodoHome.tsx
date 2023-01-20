import React from 'react';
import { useNavigate } from "react-router-dom";
import { TodoHome as TodoHomeTemplate } from '../../templates/TodoHome';
import { useTodoContext } from '../../../hooks';
import { TodoType } from '../../../data';

const TodoHome = () => {
    const navigate = useNavigate();
    const { sortedTodos, deleteTodo, globalAction, clearGlobalAction, } = useTodoContext();
    
    const onAddTodo = () => {
        navigate("/todo/add");
    };

    const onUpdateTodo = (todo: TodoType) => {
        navigate("/todo/" + todo.id);
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
                todos={sortedTodos} 
                deleteTodo={deleteTodo}
                onAddTodo={onAddTodo}
                onUpdateTodo={onUpdateTodo}
                onSearch={onSearch}
                onSelect={onSelect}
                onLogout={onLogout}
                globalAction={globalAction}
                clearGlobalAction={clearGlobalAction}
            />
        </div>
    );
};

export default TodoHome;