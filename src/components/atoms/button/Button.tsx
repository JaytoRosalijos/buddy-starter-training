import React from 'react';
import { ButtonStyle } from './styles';

export type Props = {
    variance?: "primary" | "secondary" | "text" | "error";
    block?: boolean,
    shape?: "default" | "circle" | "round";
    size?: "large" | "middle" | "small";
    icon?: React.ReactNode;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ variance = "primary", block, shape, size, icon, disabled, children, onClick }: Props) => {
    return (
        <ButtonStyle 
            variance={variance}
            block={block}
            shape={shape}
            size={size}
            icon={icon }
            disabled={disabled}
            onClick={onClick}
        >
            { children }
        </ButtonStyle>
    );
};

export default Button;