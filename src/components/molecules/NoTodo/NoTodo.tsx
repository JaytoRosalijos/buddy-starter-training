import React from 'react';

import { Button } from '../../atoms/Button';
import { ReactComponent as PaperLogo } from '../../atoms/Icons/paper.svg';
import { Wrapper, ChildrenWrapper } from './styles';

export type NoTodoProps = {
    isShowButton: boolean;
    children: React.ReactNode;
    onAddTodo: (e: any) => void;
};

const NoTodo = ({ isShowButton, onAddTodo, children, }: NoTodoProps) => {
    return (
        <Wrapper>
            <PaperLogo />
            <ChildrenWrapper>
                { children }
            </ChildrenWrapper>
            {
                isShowButton 
                && <Button variance="text" onClick={onAddTodo}>Add your first to do</Button>
            }
        </Wrapper>
    );
};

export default NoTodo;
