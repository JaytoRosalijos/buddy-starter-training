import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SearchTodo } from '.';
import { todos } from '../../../data';

export default {
    title: "Templates/SearchTodo",
    component: SearchTodo,
    argTypes: {
        deleteTodos: { action: "Delete all selected todos" },
        completeTodos: { action: "Complete all selected todos" },
        onBack: { action: "Redirect to to do home" },
    },
} as ComponentMeta<typeof SearchTodo>;

const Template: ComponentStory<typeof SearchTodo> = (args) => <SearchTodo { ...args } />;

export const Default = Template.bind({});
Default.args = {
    todos: todos,
};
