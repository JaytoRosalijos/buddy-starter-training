import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Login } from '.';

export default {
    title: "Templates/Login",
    component: Login,
} as ComponentMeta<typeof Login>;


const onLogin = async (email: string, password: string) => {
    alert(`Log in Successfully: Email: ${email},  Password: ${password}`);
};

const Template: ComponentStory<typeof Login> = () => <Login onLogin={onLogin} />;

export const Default = Template.bind({});
