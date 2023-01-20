import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SelectTodo } from '.';
import { todos } from '../../../data';

export default {
    title: "Templates/SelectTodo",
    component: SelectTodo,
    argTypes: {
        deleteTodos: { action: "Delete all selected todos" },
        completeTodos: { action: "Complete all selected todos" },
        onBack: { action: "Redirect to to do home" },
        onAddTodo: { action: "Redirect to add to do" },
    },
} as ComponentMeta<typeof SelectTodo>;

const Template: ComponentStory<typeof SelectTodo> = (args) => <SelectTodo {...args}  />;

export const Default = Template.bind({});
Default.args = {
    todos: todos,
};

export const Empty = Template.bind({});
Empty.args = {
    todos: [],
};
