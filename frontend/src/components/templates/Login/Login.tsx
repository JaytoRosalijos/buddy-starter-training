import React from 'react';

import { LoginForm } from '../../organisms/LoginForm';
import { ReactComponent as Logo } from '../../atoms/Icons/logo.svg';
import { LoginFormProps } from '../../organisms/LoginForm/LoginForm';
import {
    Wrapper,
    TitleWrapper,
    TitleAppWrapper,
    SubtitleWrapper,
    BodyWrapper,
} from './styles';


const Login = (props: LoginFormProps) => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Logo />
                <TitleAppWrapper>ToDoish</TitleAppWrapper>
                <SubtitleWrapper>Do your wish, very easyish</SubtitleWrapper>
            </TitleWrapper>
            <BodyWrapper>
                <LoginForm {...props} />
            </BodyWrapper>
        </Wrapper>
    );
};

export default Login;
