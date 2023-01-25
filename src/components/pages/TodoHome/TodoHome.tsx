import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoHomeTemplate from '../../templates/TodoHome/TodoHome';
import { useTodoContext } from '../../../context/';
import { TodoType } from '../../../data';

const TodoHome = () => {
    const { state, dispatch } = useTodoContext();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: "SORT_TODOS_BY_COMPLETED" });
    }, [dispatch]);
    
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
        alert("Redirect to Logout Page...");
    };

    const onDeleteTodoHandler = (id: string) => {
        dispatch({ type: "DELETE", id });
    };

    const onClearGlobalActionHandler = () => {
        dispatch({ type: "CLEAR_GLOBAL_ACTION" });
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