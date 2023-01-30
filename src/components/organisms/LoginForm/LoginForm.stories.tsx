import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from '.';


export default {
    title: "Organisms/LoginForm",
    component: LoginForm,
    argTypes: {
        onLogin: { action: "On Log in clicked." },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
