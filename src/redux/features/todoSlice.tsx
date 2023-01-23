import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { todos, TodoType } from '../../data';

interface TodoState {
    todos: TodoType[],
    latestAction: "update" | "delete" | "add" | "complete" | "";
};

const initialState: TodoState = {
    todos: [...todos],
    latestAction: "",
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
        state.todos.push({ id: nanoid(), title: action.payload, isDone: false});
        state.latestAction = "add";
    },
    updateTodo: (state, action: PayloadAction<TodoType>) => {
        state.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...action.payload } : todo );
        state.latestAction = "update";
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
        const isTodoExists = state.todos.find(todo => todo.id === action.payload);
        if (isTodoExists) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            state.latestAction = "delete";
        }
    },
    completeTodo: (state, action: PayloadAction<string>) => {
        const isTodoExists = state.todos.find(todo => todo.id === action.payload);
        if (isTodoExists) {
            state.todos = state.todos.map(todo => (todo.id === action.payload ? { ...todo, isDone: true, } : todo ));
            state.latestAction = "complete";
        }
    },
  }
})

export const { addTodo, updateTodo, deleteTodo, completeTodo, } = todoSlice.actions

export default todoSlice.reducer;
