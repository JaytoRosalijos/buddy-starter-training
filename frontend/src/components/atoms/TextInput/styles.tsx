import { Input } from 'antd';
import styled from 'styled-components';
import { CloseCircleFilled } from '@ant-design/icons';
import { Palette } from '../../../themes';

const baseStyle = `
    height: 32px;
    border-radius: 4px;
    border: 1px solid ${Palette.gray};

    &:hover  {
        border-color: ${Palette.primary};
    }

    &:active {
        border-color: ${Palette.primary};
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    }
`;

export const InputStyle = styled(Input)`
    ${baseStyle};
`;

export const TitleWrapper = styled.div`
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    margin-bottom: 11px;
    color: ${Palette.grayDark};
`;

export const CustomCloseCircleFilled = styled(CloseCircleFilled)`
    font-size: 20px;
    color: ${Palette.grayDark};
`;
