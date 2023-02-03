import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SelectModal } from '.';

export default {
    title: "Molecules/SelectModal",
    component: SelectModal,
    args: {
        isShow: true,
    },
} as ComponentMeta<typeof SelectModal>;

const Template: ComponentStory<typeof SelectModal> = (args) => <SelectModal {...args} />;

export const Default = Template.bind({});
