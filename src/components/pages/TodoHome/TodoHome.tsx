import React from 'react';
import { TodoHome as TodoHomeTemplate } from '../../templates/TodoHome';
import { useTodoContext } from '../../../hooks';

const TodoHome = () => {
    const { todos, deleteTodo, } = useTodoContext();
    
    return (
        <div>
            <TodoHomeTemplate todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoHome;