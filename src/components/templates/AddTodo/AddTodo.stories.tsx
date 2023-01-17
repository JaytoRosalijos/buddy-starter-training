import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AddTodo } from '.';

const addTodo = (todo: string) => {
    alert(`Add Todo: ${todo}`);
};

const goBack =  () => {
    alert("Go back.");
};

export default {
    title: "Templates/AddTodo",
    component: AddTodo,
} as ComponentMeta<typeof AddTodo>;

const Template: ComponentStory<typeof AddTodo> = (args) => <AddTodo { ...args } />;

export const Default = Template.bind({});
Default.args = {
    onBack: goBack,
    onAddTodo: addTodo,
};