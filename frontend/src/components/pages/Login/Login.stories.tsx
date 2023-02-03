import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'

import { Login } from '.';

export default {
    title: "Pages/Login",
    component: Login,
    decorators: [withRouter],
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login />;

export const Default = Template.bind({});
