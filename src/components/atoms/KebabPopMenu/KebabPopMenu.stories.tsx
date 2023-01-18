import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { KebabPopMenu } from '.';
import { StoryWrapper } from './styles';

export default {
  title: 'Atoms/KebabPopMenu',
  component: KebabPopMenu,
} as ComponentMeta<typeof KebabPopMenu>;

const Template: ComponentStory<typeof KebabPopMenu> = (args) => {
  const [active, setActive] = useState(false);

  return (
    <StoryWrapper>
        <KebabPopMenu 
          { ...args } 
          isActiveKebab={active} 
          onOpenMenu={() => setActive(true)} 
          onCloseMenu={() => setActive(false)}  
        />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
