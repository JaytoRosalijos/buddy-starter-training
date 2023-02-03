import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoSelectItem } from '.';


export default {
    title: "Molecules/TodoSelectItem",
    component: TodoSelectItem,
    args: {
        title: "List Select Item Title",
    },
} as ComponentMeta<typeof TodoSelectItem>;

const Template: ComponentStory<typeof TodoSelectItem> = (args) => <TodoSelectItem {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    isChecked: true,
};

export const NotChecked = Template.bind({});
NotChecked.args = {
    isChecked: false,
};
