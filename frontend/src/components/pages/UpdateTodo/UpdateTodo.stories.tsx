import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'

import { UpdateTodo } from '.';

export default {
    title: "Pages/UpdateTodo",
    component: UpdateTodo,
    decorators: [withRouter],
} as ComponentMeta<typeof UpdateTodo>;

const Template: ComponentStory<typeof UpdateTodo> = () => <UpdateTodo />;

export const Default = Template.bind({});