import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AddTodo } from '.';

export default {
    title: "Templates/AddTodo",
    component: AddTodo,
    argTypes: {
        onAddTodo: { action: "Add Todo" },
        onBack: { action: "Go Back" },
    }
} as ComponentMeta<typeof AddTodo>;

const Template: ComponentStory<typeof AddTodo> = (args) => <AddTodo { ...args } />;

export const Default = Template.bind({});
