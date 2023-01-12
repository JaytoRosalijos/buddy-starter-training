import { Drawer } from 'antd';
import styled from 'styled-components';

import { Palette } from '../../../themes';

export const StyledDrawer = styled(Drawer)`
    .ant-drawer-body {
        overflow: hidden;
        background: ${Palette.gray2};
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
`;

export const ButtonGroupWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const CaptionWrapper = styled.div`
    font-size: 16px;
`;
