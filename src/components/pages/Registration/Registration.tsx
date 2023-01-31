import React, { useState } from 'react';

import { Registration as RegistrationTemplate } from "../../templates/Registration";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../../context';


const Registration = () => {
    const navigate = useNavigate();
    const { registerUser } = useAuthContext();
    const [apiError, setApiError] = useState({ message: "" });

    const onRegister = async (email: string, password: string) => {
        setApiError({ message: "" });
        try {
            await registerUser(email, password);
            navigate("/");
        } catch (error: any) {
            setApiError({ message: error.message });
        }
    };

    return (
        <div>
            <RegistrationTemplate onRegister={onRegister} apiError={apiError} />
        </div>
    );
};

export default Registration;
