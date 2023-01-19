import React from 'react';

import { Button } from '../../atoms/Button';
import { ReactComponent as LogoutIcon } from '../../atoms/Icons/logout.svg';
import { ReactComponent as ArrowRightIcon } from '../../atoms/Icons/arrow-right.svg';
import { 
    Wrapper, 
    TitleWrapper, 
    NavigationWrapper,
} from './styles';

export type HeaderProps = {
    type?: "title" | "navigation";
    title?: string;
    onLogout?: (e: any) => void;
    onBack?: (e: any) => void;
};

const HeaderTitle = ({title, onLogout}: HeaderProps) => {
    return (
        <>
            <TitleWrapper>{ title }</TitleWrapper>
            <Button
                onClick={onLogout} 
                icon={<LogoutIcon />} 
                size="large" 
                variance="text" 
            />
        </>
    );
};

const HeaderNavigation = ({title, onBack}: HeaderProps) => {
    return (
        <NavigationWrapper>
            <Button
                onClick={onBack} 
                icon={<ArrowRightIcon />} 
                size="large" 
                variance="text" 
            />
            <div>
                {title}
            </div>
        </NavigationWrapper>
    );
};

const Header = ({ type="title", title="Todoish", onLogout, onBack, }: HeaderProps) => {
    const chosenComponent = type === "title" ? 
        <HeaderTitle title={title} onLogout={onLogout} /> 
        : <HeaderNavigation title={title} onBack={onBack} />;
    return (
        <Wrapper>
            { chosenComponent }
        </Wrapper>
    );
};

export default Header;