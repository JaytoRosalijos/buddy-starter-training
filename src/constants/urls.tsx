const API_URL = "http://localhost:8000";

export const apiUrls = {
    todo: {
        getAll: `${API_URL}/todo`,
        get: (todoId: string) => `${API_URL}/todo/${todoId}`,
        create: `${API_URL}/todo`,
        updateTodo: (todoId: string) => `${API_URL}/todo/${todoId}`,
        completeTodos: `${API_URL}/todo/complete-selected`,
        deleteTodo: (todoId: string) => `${API_URL}/todo/${todoId}`,
        deleteTodos: `${API_URL}/todo/delete-selected`,
        searchTodos: (query: string) => `${API_URL}/todo/search?query=${query}`,
    },
};

