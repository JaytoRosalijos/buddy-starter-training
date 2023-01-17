import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover'
import { MenuWrapper, MenuItemWrapper } from './styles';

export type PopMenuProps = {
    onUpdate?: (e: any) => void;
    onDelete?: (e: any) => void;
    onClickOutside?: (e: any) => void;
    onClickBody?: (e: any) => void;
    children?: React.ReactNode;
}

const Menu = ({ onUpdate, onDelete, }: PopMenuProps) => {
    return (
        <MenuWrapper>
            <MenuItemWrapper onClick={onUpdate}>Update</MenuItemWrapper>
            <MenuItemWrapper onClick={onDelete}>Delete</MenuItemWrapper>
        </MenuWrapper>
    );
}
const PopMenu = ({ 
        onUpdate = () => {}, 
        onDelete = () => {}, 
        onClickOutside = () => {}, 
        onClickBody = () => {},
        children, 
    }: PopMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickOutsideHandler = (e: any) => {
        setIsOpen(false);
        onClickOutside(e);
    };

    const onClickBodyHandler = (e: any) => {
        setIsOpen(!isOpen);
        onClickBody(e);
    };

    const onDeleteHandler = (e: any) => {
        setIsOpen(false);
        onDelete(e);
    }

    const onUpdateHandler = (e: any) => {
        setIsOpen(false);
        onUpdate(e);
    }

    return (
        <Popover
            isOpen={isOpen}
            align="start"
            positions={["left"]}
            onClickOutside={onClickOutsideHandler}
            content={() => (
                <Menu onDelete={onDeleteHandler} onUpdate={onUpdateHandler} />
            )}
        >
            <div onClick={onClickBodyHandler}>
                { children }
            </div>
        </Popover>
    );
};

export default PopMenu;