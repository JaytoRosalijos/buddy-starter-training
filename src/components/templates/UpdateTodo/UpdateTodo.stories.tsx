import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UpdateTodo } from '.';
import { TodoType } from '../../../data';

const updateTodo = (todo: TodoType) => {
    alert(`Update Todo: ${todo.title}`);
};

const goBack =  () => {
    alert("Go back.");
};

export default {
    title: "Templates/UpdateTodo",
    component: UpdateTodo,
} as ComponentMeta<typeof UpdateTodo>;

const Template: ComponentStory<typeof UpdateTodo> = (args) => <UpdateTodo { ...args } />;

export const Default = Template.bind({});
Default.args = {
    todo: { id: "1", title: "List item title", isDone: false },
    onBack: goBack,
    onUpdateTodo: updateTodo,
};