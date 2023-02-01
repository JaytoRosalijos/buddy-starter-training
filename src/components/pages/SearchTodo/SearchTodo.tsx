import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchTodo as SearchTodoTemplate } from '../../templates/SearchTodo';
import { useTodoContext } from '../../../context';

const SearchTodo = () => {
    const { state, completeSelectedTodos, deleteSelectedTodos, sortTodosByCompleted } = useTodoContext();
    const navigate = useNavigate();
    
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
    };

    return (
        <div>
            <SearchTodoTemplate 
                todos={state.todos} 
                deleteTodos={deleteTodoHandler}
                completeTodos={completeTodoHandler}
                onBack={onBackHandler}
            />
        </div>
    );
};

export default SearchTodo;