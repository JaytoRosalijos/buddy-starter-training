import styled, { createGlobalStyle } from 'styled-components';
import { Checkbox } from 'antd';

import { Palette } from '../../../themes';

export const StyledCheckbox = styled(Checkbox)`
    .ant-checkbox, .ant-checkbox-inner {
        border-radius: 50%; 
        width: 20px;
        height: 20px;
    }
    .ant-checkbox .ant-checkbox-inner {
        border: 1px solid ${Palette.grayDark} !important;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
        background: ${Palette.green};
        border: 1px solid ${Palette.green} !important;
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
        margin-left: 1px;
    }
    .ant-checkbox-checked::after {
        border: none !important;
        border-radius: 50% !important;
    }
`;

export const TitleWrapper = styled.div`
    font-size: 14px;
    margin-left: 5px;
    color: ${Palette.gray1};
`;

export const TodoSelectItemGlobalStyle = createGlobalStyle`
    .ant-checkbox-checked .ant-checkbox-inner:after {
        border-color: ${Palette.white} !important;
    } 
  
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner {
        border: 1px solid ${Palette.green};
        background: ${Palette.green} !important; 
        opacity: 0.5;
    }
`;