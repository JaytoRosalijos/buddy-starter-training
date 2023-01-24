import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'
import { SelectTodo } from '.';

export default {
    title: "Pages/SelectTodo",
    component: SelectTodo,
    decorators: [withRouter],
} as ComponentMeta<typeof SelectTodo>;

const Template: ComponentStory<typeof SelectTodo> = () => (
<SelectTodo />

);

export const Default = Template.bind({});