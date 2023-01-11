import styled from 'styled-components';

import { Breakpoints, Palette } from '../../../themes';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 25px;
`;

export const TitleWrapper = styled.div`
    height: 192px;
    width: 100%;
    background: rgba(47, 128, 237, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleAppWrapper = styled.div`
    color: #2F80ED;
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 7px;
`;

export const SubtitleWrapper = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${Palette.primaryLight1};
`;

export const BodyWrapper = styled.div`
    margin-top: 14px;
    width: 500px;
    margin: 0 auto;

    @media ${Breakpoints.mobile} {
        width: auto;
        padding: 0 30px;
        margin: 0;
    }
`;
