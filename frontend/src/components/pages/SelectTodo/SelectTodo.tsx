import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SelectTodo as SelectTodoTemplate } from '../../templates/SelectTodo';
import { useTodoContext } from '../../../context/';

const SelectTodo = () => {
    const { state, completeSelectedTodos, deleteSelectedTodos, sortTodosByCompleted } = useTodoContext();
    const navigate = useNavigate();
    const notDoneTodos = state.todos.filter(todo => !todo.isDone);

    useEffect(() => {
        sortTodosByCompleted();
    }, []);

    const deleteTodoHandler = async (ids: string[]) => {
        await deleteSelectedTodos(ids);
        navigate("/");
    };

    const completeTodoHandler = async (ids: string[]) => {
        await completeSelectedTodos(ids);
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