import React, { useState } from 'react';

import { Login as LoginTemplate } from "../../templates/Login";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../../context';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuthContext();
    const [apiError, setApiError] = useState({ message: "" });
    
    const onLogin = async (email: string, password: string) => {
        setApiError({ message: "" });
        try {
            await loginUser(email, password);
            navigate("/");
        } catch (error: any) {
            setApiError({ message: error.message });
        }
    };

    return (
        <div>
            <LoginTemplate onLogin={onLogin} apiError={apiError} />
        </div>
    );
};

export default Login;
