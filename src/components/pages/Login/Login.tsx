import React from 'react';
import { LoginFormProps } from '../../organisms/LoginForm/LoginForm';

import { Login as LoginTemplate } from "../../templates/Login";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    
    const props: LoginFormProps = {
        onLogin: async (email, password) => {
            navigate("/");
        },
    };

    return (
        <div>
            <LoginTemplate {...props} />
        </div>
    );
};

export default Login;
