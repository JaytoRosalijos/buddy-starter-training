import styled, { createGlobalStyle } from 'styled-components';

import { Palette } from '../../../themes';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`;

export const TitleWrapper = styled.div`
    font-size: 18px;
    color: ${Palette.primary};
    font-weight: 700;
    width: 100%;
`;

export const TitleNavWrapper = styled.div`
    font-size: 18px;
    color: ${Palette.primary};
    font-weight: 700;
    width: 100%;
`;

export const StyledButtonIconOnly = createGlobalStyle`
    .ant-btn.ant-btn-lg.ant-btn-icon-only {
        width: auto !important;
        height: auto;
        background: none;
    }
`;

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    color: ${Palette.black};
`;
