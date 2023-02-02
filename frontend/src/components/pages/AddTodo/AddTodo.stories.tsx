import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'

import { AddTodo } from '.';

export default {
    title: "Pages/AddTodo",
    component: AddTodo,
    decorators: [withRouter],
} as ComponentMeta<typeof AddTodo>;

const Template: ComponentStory<typeof AddTodo> = () => <AddTodo />;

export const Default = Template.bind({});
