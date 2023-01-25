import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { TodoHome } from '../components/pages/TodoHome';
import { AddTodo } from '../components/pages/AddTodo';
import { UpdateTodo } from '../components/pages/UpdateTodo';
import { SelectTodo } from '../components/pages/SelectTodo';
import { SearchTodo } from '../components/pages/SearchTodo';
 
// TODO: create protected route component

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/todo",
        element: <TodoHome />
    },
    {
        path: "/todo/add",
        element: <AddTodo />,
    },
    {
        path: "/todo/:id",
        element: <UpdateTodo />,
    },
    {
        path: "/todo/select",
        element: <SelectTodo />,
    },
    {
        path: "/todo/search",
        element: <SearchTodo />,
    },
]);

export { router }