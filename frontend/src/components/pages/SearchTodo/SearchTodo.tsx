import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchTodo as SearchTodoTemplate } from '../../templates/SearchTodo';
import { useTodoContext } from '../../../context';
import { useTodoQuery } from '../../../hooks/useTodoQuery';

const SearchTodo = () => {
    const navigate = useNavigate();
    const { completeSelectedTodos, deleteSelectedTodos, } = useTodoContext();
    const { queryTodos, setQuery, query } = useTodoQuery()
    
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

    const onSearhchInputHandler = (query: string) => {
        setQuery(query);
    }

    return (
        <div>
            <SearchTodoTemplate 
                query={query}
                todos={queryTodos} 
                deleteTodos={deleteTodoHandler}
                completeTodos={completeTodoHandler}
                onSearchInput={onSearhchInputHandler}
                onBack={onBackHandler}
            />
        </div>
    );
};

export default SearchTodo;