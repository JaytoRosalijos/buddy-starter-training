import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SelectTodo as SelectTodoTemplate } from '../../templates/SelectTodo';
import { useTodoContext } from '../../../context/';

const SelectTodo = () => {
    const { state, dispatch } = useTodoContext();
    const navigate = useNavigate();
    const notDoneTodos = state.todos.filter(todo => !todo.isDone);

    useEffect(() => {
        dispatch({ type: "SORT_TODOS_BY_COMPLETED" });
    }, [dispatch]);

    const deleteTodoHandler = (ids: string[]) => {
        dispatch({ type: "DELETE_SELECTED", ids });
        navigate("/");
    };

    const completeTodoHandler = (ids: string[]) => {
        dispatch({ type: "COMPLETE_SELECTED", ids });
        navigate("/");
    };

    const onBackHandler = () => {
        navigate("/");
    }

    const onAddTodoHandler = () => {
        navigate("/todo/add");
    }

    return (
        <div>
            <SelectTodoTemplate 
                todos={notDoneTodos} 
                deleteTodos={deleteTodoHandler}
                completeTodos={completeTodoHandler}
                onBack={onBackHandler}
                onAddTodo={onAddTodoHandler}
            />
        </div>
    );
};

export default SelectTodo;