import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { UpdateTodo as UpdateTodoTemplate } from '../../templates/UpdateTodo';
import { useTodoContext } from '../../../context/';

const UpdateTodo = () => {
    const { state, dispatch } = useTodoContext();
    const navigate = useNavigate();

    const { id } = useParams();
    let todo;

    if (id) {
        todo = state.todos.find(todo => todo.id === id);
    } else {
        // TODO: [Security] address if todo id is not valid
    }

    const onBack = () => {
        navigate("/");
    };

    const updateTodoHandler= (id: string, title: string) => {
        dispatch({ type: "UPDATE", todo: { ...todo, title } });
        navigate("/");
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