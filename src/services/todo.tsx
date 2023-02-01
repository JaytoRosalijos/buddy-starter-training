
import { httpAxiosAdapter } from '../config/axios';
import { apiUrls } from '../constants/urls';

const getTodos = () => {
    return httpAxiosAdapter.get(apiUrls.todo.getAll);
};

const getTodoById = (todoId: string) => {
    return httpAxiosAdapter.get(apiUrls.todo.get(todoId));
};

const createTodo = (title: string) => {
    return httpAxiosAdapter.post(apiUrls.todo.create, { title });
};

const updateTodo = (todoId: string, todo: { title: string, isDone: boolean }) => {
    return httpAxiosAdapter.patch(apiUrls.todo.updateTodo(todoId), { ...todo })
};

const deleteTodo = (todoId: string) => {
    return httpAxiosAdapter.delete(apiUrls.todo.deleteTodo(todoId));
};

const deleteSelectedTodos = (ids: string[]) => {
    return httpAxiosAdapter.delete(apiUrls.todo.deleteTodos, { data: { ids} });
};

const completeSelectedTodos = (ids: string[]) => {
    return httpAxiosAdapter.patch(apiUrls.todo.completeTodos, { ids });
};

export const TodoService = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    deleteSelectedTodos,
    completeSelectedTodos,
}
