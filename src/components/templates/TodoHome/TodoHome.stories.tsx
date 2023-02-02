import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoHome } from '.';
import { todos } from '../../../data';

export default {
    title: "Templates/TodoHome",
    component: TodoHome,
    argTypes: {
        onAddTodo: { action: "Redirect to Add To Do Page" }, 
        onLogout: { action: "Redirect to Logout Page" },
        onSelect: { action: "Redirect to Select Page" },
        onSearch: { action: "Redirect to Search Page" }, 
        onUpdateTodo: { action: "Redirect to Update To Do Page" },
        deleteTodo: { action: "Delete To Do" },
        clearGlobalAction: { action: "Clear global Action" },
    },
} as ComponentMeta<typeof TodoHome>;

const Template: ComponentStory<typeof TodoHome> = (args) => <TodoHome { ...args } />;

export const Todos = Template.bind({});
Todos.args = { 
    todos: todos,
};

export const Empty = Template.bind({});
Empty.args = { 
    todos: [],
};