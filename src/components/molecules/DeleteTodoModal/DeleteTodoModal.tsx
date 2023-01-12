import React from 'react';

import { Button } from '../../atoms/Button';
import { StyledGlobalDrawer } from '../SelectModal/styles';

import {
    StyledDrawer,
    ButtonGroupWrapper,
    CaptionWrapper,
} from './styles';

export type SelectModalProps = {
    isShow?: boolean;
    onDeleteTodo?: (e: any) => void;
    onNotDeleteTodo?: (e: any) => void;
    onClose?: (e: any) => void;
};

const DeleteTodoModal = ({isShow, onClose, onDeleteTodo, onNotDeleteTodo, }: SelectModalProps) => {
    return (
        <>
            <StyledGlobalDrawer />
            <StyledDrawer
                placement="bottom" 
                mask={false} 
                closable={false}
                onClose={onClose} 
                open={isShow}
                height="111px"
            >
                <CaptionWrapper>Delete to do?</CaptionWrapper>
                <ButtonGroupWrapper>
                    <Button onClick={onNotDeleteTodo} size="large" variance="error">No</Button>
                    <Button onClick={onDeleteTodo} size="large" variance="primary">Yes</Button>
                </ButtonGroupWrapper>
            </StyledDrawer>
        </>
    );
};

export default DeleteTodoModal;
