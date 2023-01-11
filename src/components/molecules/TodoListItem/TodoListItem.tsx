import React from 'react';
import { MoreOutlined } from '@ant-design/icons';

import { Button } from '../../atoms/Button';
import {
    Wrapper,
} from './styles';


export type TodoListItemProps = {
    key: string | number;
    title?: string;
    status?: "normal" | "select" | "warning" | "crushout";
    active?: boolean;
    onClick?: (e: any) => void;
};

const TodoListItem = ({
        key,
        title, 
        status = "normal", 
        onClick, 
        active,
     }:TodoListItemProps) => {
    return (
        <Wrapper key={key} status={status} active={active}>
            <div>{ title }</div>
            {
                status !== "crushout" && (
                    <Button 
                        icon={<MoreOutlined />} 
                        variance="text" 
                        onClick={onClick}
                    />
                )
            }
        </Wrapper>
    );
};

export default TodoListItem;
