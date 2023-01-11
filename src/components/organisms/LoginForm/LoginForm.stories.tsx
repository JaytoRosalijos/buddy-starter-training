import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from '.';


export default {
    title: "Organisms/LoginForm",
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const onLogin = async (email: string, password: string) => {
    alert(`Log in Successfully: Email: ${email},  Password: ${password}`);
};

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm onLogin={onLogin} />;

export const Default = Template.bind({});
