import React from 'react';

import { AddTodo as AddTodoTemplate } from "../../templates/AddTodo";
import { useNavigate } from "react-router-dom";
import { useTodoContext } from '../../../hooks';


const AddTodo = () => {
    const navigate = useNavigate();
    const { addTodo } = useTodoContext();
    
    const onBack = () => {
        navigate("/todo");
    };

    return (
        <div>
            <AddTodoTemplate 
                onAddTodo={addTodo} 
                onBack={onBack} 
            />
        </div>
    );
};

export default AddTodo;
