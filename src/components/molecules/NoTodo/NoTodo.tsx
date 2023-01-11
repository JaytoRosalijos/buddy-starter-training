import React from 'react';

import { Button } from '../../atoms/Button';
import { ReactComponent as PaperLogo } from './icons/paper.svg';
import { Wrapper, ChildrenWrapper } from './styles';

export type NoTodoProps = {
    isShowButton?: boolean;
    children?: React.ReactNode;
    onClick?: (e: any) => void;
};

const NoTodo = ({ isShowButton = true, onClick, children, }: NoTodoProps) => {
    return (
        <Wrapper>
            <PaperLogo />
            <ChildrenWrapper>
                { children }
            </ChildrenWrapper>
            {
                isShowButton 
                && <Button variance="text" onClick={onClick}>Add your first to do</Button>
            }
        </Wrapper>
    );
};

export default NoTodo;
