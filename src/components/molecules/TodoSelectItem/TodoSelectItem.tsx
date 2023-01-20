import React from 'react';

import { StyledCheckbox, TitleWrapper, } from './styles';

export type TodoSelectItemProps = {
    name?: string,
    title?: string,
    isChecked?: boolean;
    onChange?: (e: any) => void;
};

const TodoSelectItem = ({ 
        name, 
        title, 
        isChecked, 
        onChange, 
    }: TodoSelectItemProps) => {
    return (
        <div>
            <StyledCheckbox name={name} checked={isChecked} onChange={onChange}>
                <TitleWrapper>
                    { title } 
                </TitleWrapper>
            </StyledCheckbox>
        </div>
    );
};

export default TodoSelectItem;
