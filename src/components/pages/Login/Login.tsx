import React from 'react';
import { LoginFormProps } from '../../organisms/LoginForm/LoginForm';

import { Login as LoginTemplate } from "../../templates/Login";


const Login = () => {
    const props: LoginFormProps = {
        onLogin: async (email, password) => {
            alert(`Log in Successfully: Email: ${email},  Password: ${password}`);
        },
    };

    return (
        <div>
            <LoginTemplate {...props} />
        </div>
    );
};

export default Login;
