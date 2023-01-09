import React from 'react';
import { InputStyle, TitleWrapper } from './styles';
import { CustomCloseCircleFilled } from './styles';

export type Props = {
    allowClear?: boolean;
    value?: string;
    type?: string;
    title?: string;
    placeholder?: string;
    prefix?: React.ReactNode;
    onChange?: () => void;
    onPressEnter?: () => void;
}

const TextInput = ({ 
        allowClear, 
        value, 
        type, 
        title, 
        placeholder,
        prefix, 
        onChange, 
        onPressEnter,
    }: Props) => {
    return (
        <div>
            { title && <TitleWrapper>{ title }</TitleWrapper> }
            <InputStyle 
                type={type}
                value={value} 
                allowClear={allowClear ? { clearIcon: <CustomCloseCircleFilled /> } : false}
                placeholder={placeholder}
                prefix={prefix}
                onChange={onChange}
                onPressEnter={onPressEnter}
            />
        </div>
    );
};

export default TextInput;