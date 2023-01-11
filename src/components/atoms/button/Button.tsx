import React from 'react';
import { ButtonStyle } from './styles';

export type ButtonProps = {
    variance?: "primary" | "secondary" | "text" | "error";
    block?: boolean;
    shape?: "default" | "circle" | "round";
    size?: "large" | "middle" | "small";
    icon?: React.ReactNode;
    disabled?: boolean;
    children?: React.ReactNode;
    htmlType?: "submit" | "reset" | "button";
    onClick?: () => void;
}

const Button = ({ 
        variance = "primary", 
        block, 
        shape, 
        size, 
        icon, 
        disabled, 
        children, 
        onClick,
        htmlType,
    }: ButtonProps) => {
    return (
        <ButtonStyle 
            variance={variance}
            block={block}
            shape={shape}
            size={size}
            icon={icon}
            htmlType={htmlType}
            disabled={disabled}
            onClick={onClick}
        >
            { children }
        </ButtonStyle>
    );
};

export default Button;