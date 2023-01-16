import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoList } from '.';
import { todos } from '../../../data';

export default {
    title: "Organisms/TodoListItem",
    component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args}/>;

export const Default = Template.bind({});
Default.args = {
    todos: todos,
};
