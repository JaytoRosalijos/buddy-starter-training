import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchTodo as SearchTodoTemplate } from '../../templates/SearchTodo';
import { useTodoContext } from '../../../context';

const SearchTodo = () => {
    const { state, dispatch } = useTodoContext();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch({ type: "SORT_TODOS_BY_COMPLETED" });
    }, [dispatch]);

    const deleteTodoHandler = (ids: string[]) => {
        dispatch({ type: "DELETE_SELECTED", ids });
        navigate("/todo");
    };

    const completeTodoHandler = (ids: string[]) => {
        dispatch({ type: "COMPLETE_SELECTED", ids });
        navigate("/todo");
    };

    const onBackHandler = () => {
        navigate("/todo");
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