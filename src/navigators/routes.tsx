import { Login } from '../components/pages/Login';
import { Registration } from '../components/pages/Registration';
import { TodoHome } from '../components/pages/TodoHome';
import { AddTodo } from '../components/pages/AddTodo';
import { UpdateTodo } from '../components/pages/UpdateTodo';
import { SelectTodo } from '../components/pages/SelectTodo';
import { SearchTodo } from '../components/pages/SearchTodo';

type routesType = {
    path: string;
    component: JSX.Element;
}[];

const routes: routesType = [
    {
        path: "/login",
        component: <Login />,
    },
    {
        path: "/register",
        component: <Registration />,
    },
];

const privateRoutes: routesType = [
    {
        path: "/",
        component: <TodoHome />,
    },
    {
        path: "/todo/add",
        component: <AddTodo />,
    },
    {
        path: "/todo/:id",
        component: <UpdateTodo />,
    },
    {
        path: "/todo/select",
        component: <SelectTodo />,
    },
    {
        path: "/todo/search",
        component: <SearchTodo />,
    },
];


export { routes, privateRoutes, };
  
  