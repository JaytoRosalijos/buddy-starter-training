import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NoTodo } from '.';


export default {
    title: "Molecules/NoTodo",
    component: NoTodo,
    args: {
        children: "To do list increases productivity."
    },
} as ComponentMeta<typeof NoTodo>;

const Template: ComponentStory<typeof NoTodo> = (args) => <NoTodo {...args} />;

export const Default = Template.bind({});

export const NoButton = Template.bind({});
NoButton.args = {
    isShowButton: false,
};
