import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { TodoHome } from '../components/pages/TodoHome';
import { AddTodo } from '../components/pages/AddTodo';
import { UpdateTodo } from '../components/pages/UpdateTodo';
 
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
        element: <UpdateTodo />
    },
]);

export { router }