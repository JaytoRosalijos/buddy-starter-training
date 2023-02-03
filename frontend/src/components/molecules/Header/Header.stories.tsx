import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from '.';


export default {
    title: "Molecules/Header",
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header { ...args }/>;

export const Default = Template.bind({});
Default.args = {
    type: "title",
    title: "ToDoish",
};

export const Navigation = Template.bind({});
Navigation.args = {
    type: "navigation",
    title: "ToDoish",
};
