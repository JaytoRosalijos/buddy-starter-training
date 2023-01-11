import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Login } from '.';

export default {
    title: "Pages/Login",
    component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login />;

export const Default = Template.bind({});
