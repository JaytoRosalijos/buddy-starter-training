import React from 'react';

import { StyledCheckbox, TitleWrapper, } from './styles';

export type TodoSelectItemProps = {
    key?: string | number,
    name?: string,
    title?: string,
    isChecked?: boolean;
    onChange?: (e: any) => void;
};

const TodoSelectItem = ({ 
        name, 
        key, 
        title, 
        isChecked, 
        onChange, 
    }: TodoSelectItemProps) => {
    return (
        <div key={key}>
            <StyledCheckbox name={name} checked={isChecked} onChange={onChange}>
                <TitleWrapper>
                    { title } 
                </TitleWrapper>
            </StyledCheckbox>
        </div>
    );
};

export default TodoSelectItem;