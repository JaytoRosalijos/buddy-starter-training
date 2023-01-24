import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'

import { TodoHome } from '.';

export default {
    title: "Pages/TodoHome",
    component: TodoHome,
    decorators: [withRouter],
} as ComponentMeta<typeof TodoHome>;

const Template: ComponentStory<typeof TodoHome> = (args) => <TodoHome />;

export const Default = Template.bind({});
