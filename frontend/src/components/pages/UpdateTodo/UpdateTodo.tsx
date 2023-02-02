import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { UpdateTodo as UpdateTodoTemplate } from '../../templates/UpdateTodo';
import { useTodoContext } from '../../../context/';

const UpdateTodo = () => {
    const { state, getTodoById, updateTodo } = useTodoContext();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getTodoById(id as string);
    }, [])

    const onBack = () => {
        navigate("/");
    };

    const updateTodoHandler = async (id: string, title: string) => {
        await updateTodo(state.selectedTodo.id, { ...state.selectedTodo, title })
        navigate("/");
    };

    return (
        <div>
            <UpdateTodoTemplate 
                todo={state.selectedTodo}
                onUpdateTodo={updateTodoHandler} 
                onBack={onBack} 
            />
        </div>
    );
};

export default UpdateTodo;