import styled from 'styled-components';
import { Palette } from '../../../themes/';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ChildrenWrapper = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: ${Palette.grayDark};
    margin: 22px 0 13px 0;
`;
