import React from 'react';

import { RegistrationForm } from '../../organisms/RegistrationForm';
import { ReactComponent as Logo } from '../../atoms/Icons/logo.svg';
import { RegistrationFormProps } from '../../organisms/RegistrationForm/RegistrationForm';
import {
    Wrapper,
    TitleWrapper,
    TitleAppWrapper,
    SubtitleWrapper,
    BodyWrapper,
} from './styles';


const Registration = ({ onRegister }: RegistrationFormProps) => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Logo />
                <TitleAppWrapper>ToDoish</TitleAppWrapper>
                <SubtitleWrapper>Do your wish, very easyish</SubtitleWrapper>
            </TitleWrapper>
            <BodyWrapper>
                <RegistrationForm onRegister={onRegister} />
            </BodyWrapper>
        </Wrapper>
    );
};

export default Registration;
