import { useEffect, useState } from "react";
import { TodoType } from "../data";
import { TodoService } from "../services/todo";
import { useDebounce } from "./useDebounce";

export const useTodoQuery = () => {
    const [query, setQuery] = useState("");
    const [queryTodos, setQueryTodos] = useState<TodoType[]>([]);
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        const getQueryTodos = async () => {
            const response = await TodoService.searchTodos(debouncedQuery as string);
            const todos = response.data.todos;
            
            setQueryTodos(todos);
        };
        
        getQueryTodos();
    }, [debouncedQuery])

    return {
        queryTodos,
        setQuery,
        query,
    };
};