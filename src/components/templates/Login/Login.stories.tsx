import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Login } from '.';

export default {
    title: "Templates/Login",
    component: Login,
    argTypes: {
        onLogin: { action: "On Log in clicked. " },
    },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
