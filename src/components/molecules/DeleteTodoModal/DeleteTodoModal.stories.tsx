import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DeleteTodoModal } from '.';

export default {
    title: "Molecules/DeleteTodoModal",
    component: DeleteTodoModal,
    args: {
        isShow: true,
    },
} as ComponentMeta<typeof DeleteTodoModal>;

const Template: ComponentStory<typeof DeleteTodoModal> = (args) => <DeleteTodoModal {...args} />;

export const Default = Template.bind({});
