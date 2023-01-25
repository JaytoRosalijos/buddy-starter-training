import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AddTodo as AddTodoTemplate } from "../../templates/AddTodo";
import { useTodoContext } from '../../../context/';


const AddTodo = () => {
    const { dispatch } = useTodoContext();
    const navigate = useNavigate();
    
    const onBack = () => {
        navigate("/");
    };

    const onAddTodoHandler = (title: string) => {
        dispatch({ type: "ADD", title });
    };

    return (
        <div>
            <AddTodoTemplate 
                onAddTodo={onAddTodoHandler} 
                onBack={onBack} 
            />
        </div>
    );
};

export default AddTodo;
