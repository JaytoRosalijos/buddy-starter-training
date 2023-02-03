import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RegistrationForm } from '.';

export default {
    title: "Organisms/RegistrationForm",
    component: RegistrationForm,
    argTypes: {
        onRegister: { action: "On Register Clicked" },
    }
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = (args) => <RegistrationForm {...args} />;

export const Default = Template.bind({});
