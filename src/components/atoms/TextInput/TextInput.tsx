import React from 'react';
import { 
    InputStyle, 
    TitleWrapper,
    CustomCloseCircleFilled
} from './styles';

export type Props = {
    name?: string;
    allowClear?: boolean;
    value?: string;
    type?: string;
    title?: string;
    placeholder?: string;
    prefix?: React.ReactNode;
    onChange?: (e: any) => void;
    onPressEnter?: () => void;
}

const TextInput = ({ 
        name,
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
                name={name}
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