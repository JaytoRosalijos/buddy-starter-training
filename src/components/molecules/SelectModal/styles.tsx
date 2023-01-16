import { Drawer } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

import { Palette, Breakpoints } from '../../../themes';

export const StyledGlobalDrawer = createGlobalStyle`
    .ant-drawer-wrapper-body {
        background: ${Palette.gray2};
    }
    .ant-drawer-content-wrapper {
        background: ${Palette.gray2};
        box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1) !important;
    }
`;

export const StyledDrawer = styled(Drawer)`
    .ant-drawer-body {
        padding: 20px 0 0 39px;
        overflow: hidden;
        background: ${Palette.gray2};
        font-size: 16px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 19px;
        width: 500px;
        margin: auto;
    }
    @media ${Breakpoints.mobile} {
        .ant-drawer-body {
            width: 100%;
        }
    }
`;

export const StyledDrawerListIem = styled.div`
    cursor: pointer;
    padding: 0 5px;
`;

export const StyledDrawerListItemDelete = styled.span`
    color: ${Palette.errorDark};
`;
