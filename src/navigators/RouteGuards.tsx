import { Navigate, RouteProps, } from 'react-router-dom';

export type ProtectedRouteProps = {
    component: JSX.Element;
} & RouteProps;



export const ProtectedRoute = ({ component }: ProtectedRouteProps) => {
    // TODO: add routing logic if user is logged in or not
    const isLoggedIn = true;

    return isLoggedIn ? component : <Navigate to="/login" replace={true} />
};

export const AuthRoute = ({ component }: ProtectedRouteProps) => {
    // TODO: add routing logic if user is logged in or not
    const isLoggedIn = false;

    return !isLoggedIn ? component : <Navigate to="/" replace={true} />
};
