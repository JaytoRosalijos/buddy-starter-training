import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Toast } from '.';

export default {
    title: "Atoms/Toast",
    component: Toast,
    argTypes: {
        message: {
            defaultValue: "To do Saved",
            options: ["To do Completed", "To do Saved", "To do Updated", "To do Deleted"],
            control: "select",
        },
        show: {
            defaultValue: true,
            type: "boolean",
        },
        duration: {
            defaultValue: 3,
            type: "number",
        },
        placement: {
            defaultValue: "bottom",
        },
        onClose: { 
            action: "toast closed!" 
        },
    },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Primary = Template.bind({});
