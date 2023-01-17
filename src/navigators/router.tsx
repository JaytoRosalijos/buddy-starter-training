import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { TodoHome
 } from '../components/pages/TodoHome';
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/todo",
        element: <TodoHome />
    }
]);

export { router }