import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoHomeTemplate from '../../templates/TodoHome/TodoHome';
import { useTodoContext, useAuthContext } from '../../../context/';
import { TodoType } from '../../../data';

const TodoHome = () => {
    const { logoutUser } = useAuthContext();
    const { state, deleteTodo, sortTodosByCompleted, clearGlobalAction } = useTodoContext();
    const navigate = useNavigate();

    useEffect(() => {
         sortTodosByCompleted();
    }, []);
    
    const onAddTodo = () => {
        navigate("/todo/add");
    };

    const onUpdateTodo = (todo: TodoType) => {
        navigate("/todo/" + todo.id);
    };

    const onSearch = () => {
        navigate("/todo/search");
    };

    const onSelect = () => {
        navigate("/todo/select");
    };

    const onLogout = () => {
        logoutUser();
        navigate("/login");
    };

    const onDeleteTodoHandler = async (id: string) => {
        await deleteTodo(id);
    };

    const onClearGlobalActionHandler = () => {
        clearGlobalAction();
    };
    
    return (
        <div>
            <TodoHomeTemplate 
                todos={state.todos} 
                deleteTodo={onDeleteTodoHandler}
                onAddTodo={onAddTodo}
                onUpdateTodo={onUpdateTodo}
                onSearch={onSearch}
                onSelect={onSelect}
                onLogout={onLogout}
                globalAction={state.latestGlobalAction}
                clearGlobalAction={onClearGlobalActionHandler}
            />
        </div>
    );
};

export default TodoHome;