import React from 'react';

import {
    StyledGlobalDrawer,
    StyledDrawer,
    StyledDrawerListIem,
    StyledDrawerListItemDelete,
 } from './styles';

export type SelectModalProps = {
    isShow?: boolean;
    onSelectAll?: (e: any) => void;
    onCompleteSelected?: (e: any) => void;
    onDeleteSelected?: (e: any) => void;
    onClose?: (e: any) => void;
};

const SelectModal = ({ 
        isShow, 
        onSelectAll, 
        onCompleteSelected, 
        onDeleteSelected, 
        onClose, 
    }: SelectModalProps) => {

    return (
        <>
            <StyledGlobalDrawer />
            <StyledDrawer
                placement="bottom" 
                mask={false} 
                closable={false}
                onClose={onClose} 
                open={isShow}
                height="151px"
            >
                <StyledDrawerListIem onClick={onSelectAll}>Select All</StyledDrawerListIem>
                <StyledDrawerListIem onClick={onCompleteSelected}>Complete Selected</StyledDrawerListIem>
                <StyledDrawerListIem onClick={onDeleteSelected}><StyledDrawerListItemDelete>Delete Selected</StyledDrawerListItemDelete>
                </StyledDrawerListIem>
            </StyledDrawer>
        </>
        
    );
};

export default SelectModal;
