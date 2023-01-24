import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'

import { SearchTodo } from '.';

export default {
    title: "Pages/SearchTodo",
    component: SearchTodo,
    decorators: [withRouter],
} as ComponentMeta<typeof SearchTodo>;

const Template: ComponentStory<typeof SearchTodo> = (args) => <SearchTodo />;

export const Default = Template.bind({});