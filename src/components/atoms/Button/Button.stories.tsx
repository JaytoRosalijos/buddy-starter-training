import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchOutlined } from '@ant-design/icons';

import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked me' } },
  args: { children: 'Click Me' },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variance: "primary",
  block: false,
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variance: "secondary",
};

export const Error = Template.bind({});
Error.args = {
  ...Primary.args,
  variance: "error",
};

export const Text = Template.bind({});
Text.args = {
  ...Primary.args,
  variance: "text",
};

export const Icon = Template.bind({});
Icon.args = {
  ...Primary.args,
  icon: <SearchOutlined />,
  variance: "text",
  size: "large",
  children: null,
}

export const IconText = Template.bind({});
IconText.args = {
  ...Primary.args,
  icon: <SearchOutlined />,
  variance: "text",
  size: "middle",
};

export const Fab = Template.bind({});
Fab.args = {
  shape: "circle",
  size: "large",
  children: <SearchOutlined />,
};
