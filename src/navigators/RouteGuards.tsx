import { Navigate, RouteProps, } from 'react-router-dom';
import { useAuthContext } from '../context';

export type ProtectedRouteProps = {
    component: JSX.Element;
} & RouteProps;

export const ProtectedRoute = ({ component }: ProtectedRouteProps) => {
    const { state } = useAuthContext();

    return state.isLoggedIn ? component : <Navigate to="/login" replace={true} />
};

export const AuthRoute = ({ component }: ProtectedRouteProps) => {
    const { state } = useAuthContext();
    
    return !state.isLoggedIn ? component : <Navigate to="/" replace={true} />
};
