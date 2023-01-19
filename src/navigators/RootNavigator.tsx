import { RouterProvider } from "react-router-dom";
import { router } from '.';

const RootNavigator = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default RootNavigator;