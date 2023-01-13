import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoSelectList } from '.';
import { Todo } from './TodoSelectList';

const todos: Todo[] = [
    {
        id: 1,
        title: "List Title 1",
    },
    {
        id: 2,
        title: "List Title 2",
    },
    {
        id: 3,
        title: "List Title 3",
    },
    {
        id: 4,
        title: "List Title 4",
    },
    {
        id: 5,
        title: "List Title 5",
    },
];

export default {
    title: "Organisms/TodoSelectList",
    component: TodoSelectList,
} as ComponentMeta<typeof TodoSelectList>;

const Template: ComponentStory<typeof TodoSelectList> = (args) => <TodoSelectList {...args}/>;

export const Default = Template.bind({});
Default.args = {
    todos: todos,
};
