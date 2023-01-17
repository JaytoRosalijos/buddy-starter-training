import React from 'react';

import { Button } from '../../atoms/Button';
import {
    Wrapper,
} from './styles';
import { PopMenu } from '../../atoms/PopMenu';
import { TodoType } from '../../../data';
import { ReactComponent as KebabIcon } from './icons/kebab.svg';
import { ReactComponent as KebabActiveIcon } from './icons/kebab-active.svg';

export type TodoListItemStatus = "normal" | "select" | "warning" | "crushout";

export type TodoListItemProps = {
    title?: string;
    status?: TodoListItemStatus;
    active?: boolean;
    onClickKebabMenu?: () => void;
    onClickOutsideKebabMenu?: () => void;
    onDeleteTodo?: () => void;
    onUpdateTodo?: () => void;
};

const TodoListItem = ({
        title, 
        status = "normal", 
        onClickKebabMenu, 
        active,
        onDeleteTodo,
        onUpdateTodo,
        onClickOutsideKebabMenu,
     }:TodoListItemProps) => {
    return (
        <Wrapper status={status} active={active}>
            <div>{ title }</div>
            {
                status !== "crushout" && (
                    <PopMenu onDelete={onDeleteTodo} onUpdate={onUpdateTodo} onClickOutside={onClickOutsideKebabMenu}>
                        <Button 
                            icon={status === "select" || status === "warning" ? <KebabActiveIcon/> : <KebabIcon />} 
                            variance="text" 
                            onClick={onClickKebabMenu}
                        />
                    </PopMenu>
                )
            }
        </Wrapper>
    );
};

export default TodoListItem;
