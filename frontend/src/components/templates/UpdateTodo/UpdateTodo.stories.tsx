import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UpdateTodo } from '.';

export default {
    title: "Templates/UpdateTodo",
    component: UpdateTodo,
    argTypes: {
        onUpdateTodo: { action: "Update Todo" },
        onBack: { action: "Go Back" },
    }
} as ComponentMeta<typeof UpdateTodo>;

const Template: ComponentStory<typeof UpdateTodo> = (args) => <UpdateTodo { ...args } />;

export const Default = Template.bind({});
Default.args = {
    todo: { id: "1", title: "List item title", isDone: false },
};