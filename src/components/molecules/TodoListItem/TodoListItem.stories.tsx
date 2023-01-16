import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoListItem } from '.';


export default {
    title: "Molecules/TodoListItem",
    component: TodoListItem,
    args: { title: "List item title" },
} as ComponentMeta<typeof TodoListItem>;

const Template: ComponentStory<typeof TodoListItem> = (args) => <TodoListItem  {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    status: "normal",
}

export const Selected = Template.bind({});
Selected.args = {
    status: "select",
    active: true,
};

export const Delete = Template.bind({});
Delete.args = {
    ...Selected.args,
    status: "warning",
};

export const CrushOut = Template.bind({});
CrushOut.args = {
    ...Selected.args,
    status: "crushout",
};
