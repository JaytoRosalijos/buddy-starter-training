import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoList } from '.';
import { todos } from '../../../data';

export default {
    title: "Organisms/TodoListItem",
    component: TodoList,
    argTypes: { 
        onClickKebabMenu: { action: "Click Kebab Menu" },
        onClickOutsideKebabMenu: { action: "Click Outside Kebab Menu" },
        onUpdateTodo: { action: "Redirect to Update To Do Page" },
        onToBeDeleteTodo: { action: "To be deleted to do" },
    },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args}/>;

export const Default = Template.bind({});
Default.args = {
    todos: todos,
};
