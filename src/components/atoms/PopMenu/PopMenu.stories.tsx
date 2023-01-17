import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PopMenu } from '.';
import { Button } from '../Button';
import { StoryWrapper } from './styles';

export default {
  title: 'Atoms/PopMenu',
  component: PopMenu,
} as ComponentMeta<typeof PopMenu>;

const Template: ComponentStory<typeof PopMenu> = (args) => {
  return (
    <StoryWrapper>
      <PopMenu {...args}>
        <Button>Open</Button>
      </PopMenu>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
