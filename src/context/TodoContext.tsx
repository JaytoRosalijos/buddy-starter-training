import { createContext, useContext, useEffect, useReducer } from "react";

import { TodoType } from '../data';
import { TodoService } from "../services/todo";
import { useAuthContext } from "./AuthContext";
export type GlobalAction = "update" | "delete" | "add" | "complete" | "";

interface ITodoContextState {
    todos: TodoType[];
    latestGlobalAction: GlobalAction;
    selectedTodo: TodoType;
}

type TodoActionType =
 | { type: "INITIALIZE", todos: TodoType[] }
 | { type: "ADD", todo: TodoType }
 | { type: "UPDATE", todo: TodoType }
 | { type: "DELETE", id: string }
 | { type: "DELETE_SELECTED", ids: string[] }
 | { type: "COMPLETE", id: string }
 | { type: "COMPLETE_SELECTED", ids: string[] }
 | { type: "CLEAR_GLOBAL_ACTION" }
 | { type: "SORT_TODOS_BY_COMPLETED" }
 | { type: "SELECTED_TODO", todo: TodoType }
 | { type: "CLEAR_STATE",  initialState: ITodoContextState};

interface TodoContextProps {
    state: ITodoContextState;
    addTodo: (title: string) => Promise<void>;
    updateTodo: (todoId: string, todo: { title: string, isDone: boolean }) => Promise<void>;
    deleteTodo: (todoId: string) => Promise<void>;
    getTodoById: (todoId: string) => Promise<void>;
    completeSelectedTodos: (ids: string[]) => Promise<void>;
    deleteSelectedTodos: (ids: string[]) => Promise<void>;
    sortTodosByCompleted: () => void;
    clearGlobalAction: () => void;
}

const initialState: ITodoContextState = {
    todos: [],
    latestGlobalAction: "",
    selectedTodo: {} as TodoType,
};

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const { authState } = useAuthContext();

    const addTodo = async (title: string) => {
        const response = await TodoService.createTodo(title);
        const todo = response.data.todo;
        dispatch({ type: "ADD", todo });
    }

    const updateTodo = async (todoId: string, todo: { title: string, isDone: boolean }) => {
        const response = await TodoService.updateTodo(todoId, { ...todo });
        const updateTodo = response.data.updateTodo;
        dispatch({ type: "UPDATE", todo: updateTodo})
    }

    const deleteTodo = async (todoId: string) => {
        await TodoService.deleteTodo(todoId);
        dispatch({ type: "DELETE", id: todoId });
    }

    const deleteSelectedTodos = async (ids: string[]) => {
        await TodoService.deleteSelectedTodos(ids);
        dispatch({ type: "DELETE_SELECTED", ids });
    }

    const completeSelectedTodos = async (ids: string[]) => {
        await TodoService.completeSelectedTodos(ids);
        dispatch({ type: "COMPLETE_SELECTED", ids });
    }

    const getTodoById = async (todoId: string) => {
        const response = await TodoService.getTodoById(todoId);
        const todo = response.data.todo;
        dispatch({ type: "SELECTED_TODO", todo });
    };

    const sortTodosByCompleted = () => {
        dispatch({ type: "SORT_TODOS_BY_COMPLETED" });
    };

    const clearGlobalAction = () => {
        dispatch({ type: "CLEAR_GLOBAL_ACTION" });
    };

    useEffect(() => {
        if (!authState.isLoggedIn)
            dispatch({ type: "CLEAR_STATE", initialState })
    }, [authState.isLoggedIn])

    useEffect(() => {
        if (authState.user.uid) {
            const getTodos = async () => {
                const response = await TodoService.getTodos();
                const todos = response.data.todos;
                dispatch({ type: "INITIALIZE", todos })
                sortTodosByCompleted();
            }
            getTodos();
        }
    }, [authState.user.uid]);

    return (
        <TodoContext.Provider value={{ 
            state, 
            addTodo, 
            updateTodo, 
            getTodoById, 
            deleteTodo,
            completeSelectedTodos,
            deleteSelectedTodos,
            sortTodosByCompleted,
            clearGlobalAction,
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export const todoReducer = (state: ITodoContextState, action: TodoActionType): ITodoContextState => {
    switch (action.type) {
        case "INITIALIZE":
            return {
                ...state,
                todos: action.todos,
            };
        case "ADD":
            return {
                ...state,
                todos: [...state.todos, action.todo],
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
        case "SELECTED_TODO": 
            return {
                ...state,
                selectedTodo: action.todo,
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
        case "CLEAR_STATE":
            return {
                ...action.initialState,
            };
        default:
            return state;
    }
  }
  