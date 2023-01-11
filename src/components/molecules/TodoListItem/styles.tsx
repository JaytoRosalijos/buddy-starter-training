import styled from 'styled-components';
import { Palette } from '../../../themes/themes';
import { TodoListItemProps } from './TodoListItem';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    div {
        ${(props: TodoListItemProps) => status[props.status || "normal"]}
    }

    .anticon-more {
        font-size: 20px;
        color:  ${(props: TodoListItemProps) => props.active ? Palette.primary : Palette.grayDark }
    }
`;

const Normal = `
    color: ${Palette.gray1};
`;

const Selected = `
    color: ${Palette.primaryLight2};
`;

const ToBeDeleted = `
    color: ${Palette.errorLight1};
`;

const CrushedOut = `
    color: ${Palette.primaryLight2};
    text-decoration-line: line-through;
`;

const status = {
    normal: Normal,
    select: Selected,
    warning: ToBeDeleted,
    crushout: CrushedOut,
};
