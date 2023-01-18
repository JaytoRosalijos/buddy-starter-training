import React, { useState, createContext } from 'react';
import { TodoType } from '../data';
import { useId } from 'react';
import { todos as MockTodos } from '../data';

interface ITodoContext {
    todos: TodoType[];
    addTodo: (title: string) => void;
    updateTodo: (todo: TodoType) => void;
    deleteTodo: (id: string) => void;
    action: GlobalAction;
    setGlobalAction: (action: GlobalAction) => void;
}

const defaultState: ITodoContext = {
    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    action: "",
    setGlobalAction: () => {},
};

export type GlobalAction = "update" | "delete" | "add" | "complete" | "";

export type TodoProviderProps = {
    children: React.ReactNode;
};

export const TodoContext = createContext(defaultState);

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const todoId = useId()
    const [todos, setTodos] = useState<TodoType[]>([...MockTodos]);
    const [action, setGlobalAction] = useState<GlobalAction>("");

    const addTodo = (title: string) => {
        setTodos([ ...todos, { title, id: todoId, isDone: false, } ]);
    }

    const updateTodo = (todo: TodoType) => {
        setTodos(todos.map(_todo => {
            if (_todo.id === todo.id) 
                return { ...todo };
            return _todo;
        }));
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(_todo => _todo.id !== id));
    }

    return (
        <TodoContext.Provider value={{ 
            todos, 
            addTodo, 
            updateTodo,
            deleteTodo, 
            action, 
            setGlobalAction, 
        }}>
            { children }
        </TodoContext.Provider>
    );
};