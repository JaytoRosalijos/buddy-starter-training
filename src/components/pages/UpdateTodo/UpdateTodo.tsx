import React from 'react';

import { UpdateTodo as UpdateTodoTemplate } from "../../templates/UpdateTodo";
import { useNavigate, useParams } from "react-router-dom";
import { useTodoContext } from '../../../hooks';

const UpdateTodo = () => {
    const navigate = useNavigate();
    const { updateTodo, getTodo } = useTodoContext();
    const { id } = useParams();
    let todo;

    if (id) {
        todo = getTodo(id);
    } else {
        // TODO: [Security] address if todo id is not valid
    }

    const onBack = () => {
        navigate("/todo");
    };

    const updateTodoHandler= (id: string, title: string) => {
        updateTodo({...todo, title});
        navigate("/todo");
    };

    return (
        <div>
            <UpdateTodoTemplate 
                todo={todo}
                onUpdateTodo={updateTodoHandler} 
                onBack={onBack} 
            />
        </div>
    );
};

export default UpdateTodo;