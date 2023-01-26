import React from 'react';

import { Registration as RegistrationTemplate } from "../../templates/Registration";
import { useNavigate } from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();

    const onRegister = async (email: string, password: string) => {
        alert(`Register success! Email: ${email} ${password}.`);
        navigate("/");
    };

    return (
        <div>
            <RegistrationTemplate onRegister={onRegister} />
        </div>
    );
};

export default Registration;
