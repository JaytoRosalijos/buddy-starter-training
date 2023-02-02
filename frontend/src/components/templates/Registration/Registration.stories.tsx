import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Registration } from '.';

export default {
    title: "Templates/Registration",
    component: Registration,
    argTypes: {
        onRegister: { action: "On Register Clicked" },
    }
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = (args) => <Registration {...args} />;

export const Default = Template.bind({});
