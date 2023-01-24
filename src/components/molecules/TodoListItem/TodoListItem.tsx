import React from 'react';

import { KebabPopMenu } from '../../atoms/KebabPopMenu';
import { 
    Wrapper, 
    TitleWrapper,
} from './styles';

export type TodoListItemStatus = "normal" | "select" | "warning" | "crushout";

export type TodoListItemProps = {
    title: string;
    status: TodoListItemStatus;
    isActiveKebab: boolean;
    showKebab: boolean;
    onClickKebabMenu: () => void;
    onClickOutsideKebabMenu: () => void;
    onDeleteTodo: () => void;
    onUpdateTodo: () => void;
};

const TodoListItem = ({
        title, 
        status = "normal", 
        onUpdateTodo,
        onClickKebabMenu, 
        onDeleteTodo,
        isActiveKebab,
        showKebab,
        onClickOutsideKebabMenu,
     }:TodoListItemProps) => {
    
    return (
        <Wrapper status={status} >
            <TitleWrapper>{ title }</TitleWrapper>
            {
                showKebab && (
                    <div>
                        <KebabPopMenu 
                            onOpenMenu={onClickKebabMenu} 
                            onCloseMenu={onClickOutsideKebabMenu} 
                            onDelete={onDeleteTodo}
                            onUpdate={onUpdateTodo}
                            isActiveKebab={isActiveKebab}
                        />
                    </div>
                )
            }
        </Wrapper>
    );
};

export default TodoListItem;
