import React from 'react';
import { 
    InputStyle, 
    TitleWrapper,
    CustomCloseCircleFilled
} from './styles';

export type TextInputProps = {
    name?: string,
    allowClear?: boolean;
    value?: string;
    type?: string;
    title?: string;
    maxLength?: number;
    placeholder?: string;
    prefix?: React.ReactNode;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onPressEnter?: () => void;
}

const TextInput = ({ 
        name,
        allowClear, 
        value, 
        type, 
        title, 
        maxLength,
        placeholder,
        prefix, 
        onChange, 
        onPressEnter,
        onBlur,
    }: TextInputProps) => {
    return (
        <div>
            { title && <TitleWrapper>{ title }</TitleWrapper> }
            <InputStyle 
                name={name}
                type={type}
                value={value} 
                allowClear={allowClear ? { clearIcon: <CustomCloseCircleFilled /> } : false}
                placeholder={placeholder}
                prefix={prefix}
                onChange={onChange}
                onPressEnter={onPressEnter}
                maxLength={maxLength}
                onBlur={onBlur}
            />
        </div>
    );
};

export default TextInput;