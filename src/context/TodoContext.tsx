import { createContext, useContext, useReducer } from "react";
import { v4 as uuid } from 'uuid';

import { TodoType } from '../data';
import { todos as MockTodos } from '../data/Todos'

export type GlobalAction = "update" | "delete" | "add" | "complete" | "";

interface ITodoContextState {
    todos: TodoType[];
    latestGlobalAction: GlobalAction;
}

type TodoActionType =
 | { type: "ADD", title: string }
 | { type: "UPDATE", todo: TodoType }
 | { type: "DELETE", id: string }
 | { type: "DELETE_SELECTED", ids: string[] }
 | { type: "COMPLETE", id: string }
 | { type: "COMPLETE_SELECTED", ids: string[] }
 | { type: "CLEAR_GLOBAL_ACTION" }
 | { type: "SORT_TODOS_BY_COMPLETED" };

interface TodoContextProps {
    state: ITodoContextState;
    dispatch: React.Dispatch<TodoActionType>;
}

const initialState: ITodoContextState = {
    todos: [...MockTodos],
    latestGlobalAction: "",
};

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export const todoReducer = (state: ITodoContextState, action: TodoActionType): ITodoContextState => {
    switch (action.type) {
        case "ADD":
            const todoId = uuid().slice(0,8);
            
            return {
                ...state,
                todos: [...state.todos, { id: todoId, title: action.title, isDone: false }],
                latestGlobalAction: "add" as GlobalAction,
            };
        case "UPDATE":
            return { 
                ...state,
                todos: state.todos.map(todo => todo.id === action.todo.id ? { ...action.todo } : todo), 
                latestGlobalAction: "update" as GlobalAction,
            };
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id), 
                latestGlobalAction: "delete" as GlobalAction,
            };
        case "DELETE_SELECTED":
            return {
                ...state,
                todos: state.todos.filter(todo => !action.ids.includes(todo.id)), 
                latestGlobalAction: "delete" as GlobalAction,
            };
        case "COMPLETE":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? { ...todo, isDone: true } : todo), 
                latestGlobalAction: "complete" as GlobalAction,
            };
        case "COMPLETE_SELECTED":
            return {
                ...state,
                todos: state.todos.map(todo => action.ids.includes(todo.id) ? { ...todo, isDone: true } : todo), 
                latestGlobalAction: "complete" as GlobalAction,
            };
        case "CLEAR_GLOBAL_ACTION":
            return {
                ...state,
                latestGlobalAction: "",
            };
        case "SORT_TODOS_BY_COMPLETED":
            return {
                ...state,
                todos: [...state.todos].sort((a, b) =>  (+ a.isDone) - (+ b.isDone)),
            };
        default:
            return state;
    }
  }
  