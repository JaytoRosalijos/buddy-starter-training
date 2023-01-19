import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoHome } from '.';

export default {
    title: "Pages/TodoHome",
    component: TodoHome,
} as ComponentMeta<typeof TodoHome>;

const Template: ComponentStory<typeof TodoHome> = (args) => <TodoHome />;

export const Default = Template.bind({});
