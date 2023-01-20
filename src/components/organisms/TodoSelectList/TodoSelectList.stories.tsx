import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoSelectList } from '.';
import { todos } from '../../../data';

export default {
    title: "Organisms/TodoSelectList",
    component: TodoSelectList,
} as ComponentMeta<typeof TodoSelectList>;

const Template: ComponentStory<typeof TodoSelectList> = (args) => <TodoSelectList {...args}/>;

export const Default = Template.bind({});
Default.args = {
    todos: todos,
    selectedIds: [],
};


export const SelectAll = Template.bind({});
SelectAll.args = {
    ...Default.args,
    selectedIds: [...todos.map(todo => todo.id)],
};