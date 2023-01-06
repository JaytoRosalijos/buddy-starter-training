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

const Button = (props: Props) => {
    return (
        <ButtonStyle {...props}>{ props.children }</ButtonStyle>
    );
};

Button.defaultProps = {
    variance: "primary",
    block: false,
    disabled: false,
}

export default Button;