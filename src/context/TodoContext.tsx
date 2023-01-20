import React, { useState, createContext } from 'react';
import { TodoType } from '../data';
import { todos as MockTodos } from '../data';
import { v4 as uuid } from 'uuid';

interface ITodoContext {
    todos: TodoType[];
    sortedTodos: TodoType[];
    addTodo: (title: string) => void;
    updateTodo: (todo: TodoType) => void;
    deleteTodo: (id: string) => void;
    globalAction: GlobalAction;
    clearGlobalAction: () => void;
    getTodo: (id: string) => TodoType | undefined;
}

const defaultState: ITodoContext = {
    todos: [],
    sortedTodos: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    globalAction: "",
    clearGlobalAction: () => {},
    getTodo: () => ({ id: "", title: ""}),
};

export type GlobalAction = "update" | "delete" | "add" | "complete" | "";

type TodosTuple = { normal: TodoType[], completed: TodoType[] };

export type TodoProviderProps = {
    children: React.ReactNode;
};

export const TodoContext = createContext(defaultState);

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<TodoType[]>([...MockTodos]);
    const [globalAction, setGlobalAction] = useState<GlobalAction>("");

    const sortedTodosTuple: TodosTuple= todos.reduce((todosTuple: TodosTuple, todo: TodoType) => {
        if (todo.isDone)
            return { ...todosTuple, completed: [...todosTuple.completed, todo] }
        return { ...todosTuple, normal: [...todosTuple.normal, todo] }
    }, { normal: [], completed: [] });

    const sortedTodos = [ ...sortedTodosTuple.normal, ...sortedTodosTuple.completed ];

    const addTodo = (title: string) => {
        const id = uuid().slice(0,8);
        setTodos([ ...todos, { title, id: id, isDone: false, } ]);
        setGlobalAction("add");
    };

    const updateTodo = (todo: TodoType) => {
        setTodos(todos.map(_todo => {
            if (_todo.id === todo.id) 
                return { ...todo };
            return _todo;
        }));
        setGlobalAction("update");
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(_todo => _todo.id !== id));
        setGlobalAction("delete");
    };

    const clearGlobalAction = () => {
        setGlobalAction("");
    };

    const getTodo = (id: string) => todos.find(todo => todo.id === id);

    return (
        <TodoContext.Provider value={{ 
            todos, 
            sortedTodos,
            addTodo, 
            updateTodo,
            deleteTodo, 
            globalAction, 
            clearGlobalAction, 
            getTodo,
        }}>
            { children }
        </TodoContext.Provider>
    );
};