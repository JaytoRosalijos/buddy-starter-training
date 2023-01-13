import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoHome } from '.';
import { todos } from '../../../data';

export default {
    title: "Templates/TodoHome",
    component: TodoHome,
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