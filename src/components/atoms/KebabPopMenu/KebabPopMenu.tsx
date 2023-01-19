import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import { 
    MenuWrapper, 
    MenuItemWrapper, 
    KebabButton,
} from './styles';

export type KebabPopMenuProps = {
    isActiveKebab: boolean;
    onUpdate: () => void;
    onDelete: () => void;
    onOpenMenu: () => void;
    onCloseMenu: () => void;
};

type MenuProps = {
    onUpdate: () => void;
    onDelete: () => void;
}

const Menu = ({ onUpdate, onDelete, }: MenuProps) => {
    const [hidden, setHidden] = useState(false);
    
    const onUpdateHandler = () => {
        setHidden(true);
        onUpdate();
    }
    const onDeleteHandler = () => {
        setHidden(true);
        onDelete();
    }

    return (
        !hidden ? (
            <MenuWrapper >
                <MenuItemWrapper onClick={onUpdateHandler}>Update</MenuItemWrapper>
                <MenuItemWrapper onClick={onDeleteHandler}>Delete</MenuItemWrapper>
            </MenuWrapper>
        ) : <></>
    );
}

const KebabPopMenu = ({ 
        isActiveKebab, 
        onUpdate, 
        onDelete,
        onOpenMenu,
        onCloseMenu,
    }:KebabPopMenuProps) => {
    return (
        <Popup
            trigger={<KebabButton $isActive={isActiveKebab} />}
            position="left top"
            closeOnDocumentClick
            onOpen={onOpenMenu}
            onClose={onCloseMenu}
        >
            <Menu onUpdate={onUpdate} onDelete={onDelete} />
        </Popup>
    );
};

export default KebabPopMenu;