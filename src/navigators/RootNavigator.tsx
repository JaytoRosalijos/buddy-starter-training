import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./RouteGuards";
import { privateRoutes, routes } from "./routes";

export const RootNavigator = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<AuthRoute component={route.component} />}
                        />
                    ))
                }
                {
                    privateRoutes.map(route => (
                        <Route 
                            key={route.path} 
                            path={route.path} 
                            element={<ProtectedRoute component={route.component} />}
                        />
                    ))
                }
            </Routes>
        </BrowserRouter>
    );
};