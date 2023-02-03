import styled from "styled-components";

import { ReactComponent as KebabIcon } from '../Icons/kebab.svg';
import { Palette } from '../../../themes';

type KebabButtonProps = {
    $isActive?: boolean;
};

export const StoryWrapper = styled.div`
    height: 50vh;
    width: 100vw; 
    display: flex;
    justify-content: center;
`;

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 115px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 12px 0 12px 12px;
    background: ${Palette.white};
`;

export const MenuItemWrapper = styled.div`
    cursor: pointer;
`;

export const KebabButton = styled(KebabIcon)<KebabButtonProps>`
    cursor: pointer;
    padding: 5px 12px;

    circle {
        fill: ${props => props.$isActive ? Palette.primary : Palette.gray3}
    }
`;
