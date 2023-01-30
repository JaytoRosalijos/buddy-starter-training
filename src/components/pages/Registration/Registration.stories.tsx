import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'

import { Registration } from '.';

export default {
    title: "Pages/Registration",
    component: Registration,
    decorators: [withRouter],
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = () => <Registration />;

export const Default = Template.bind({});
