import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchOutlined } from '@ant-design/icons';

import TextInput from './TextInput';

export default {
    title: "Atoms/TextInput",
    component: TextInput,
    argTypes: { 
        onChange: { action: "input change" },
        onPressEnter: { action: "enter key pressed" }, 
    },
    args: { placeholder: "Text Input" },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});

export const Title = Template.bind({});
Title.args = {
    title: "Text Input",
};

export const Clear = Template.bind({});
Clear.args = {
    allowClear: true,
};

export const Prefix = Template.bind({});
Prefix.args = {
    prefix: <SearchOutlined />
};

export const Complete = Template.bind({});
Complete.args = {
    ...Title.args,
    allowClear: true,
}

