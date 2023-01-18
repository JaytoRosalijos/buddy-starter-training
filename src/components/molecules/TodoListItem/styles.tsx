import styled from 'styled-components';
import { Palette } from '../../../themes/themes';
import { TodoListItemStatus } from './TodoListItem';

export const Wrapper = styled.div<{ status: TodoListItemStatus }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    div {
        ${(props) => status[props.status]}
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

const ActiveKebab = `
    color: ${Palette.gray1};
`;

const status = {
    normal: Normal,
    select: Selected,
    warning: ToBeDeleted,
    crushout: CrushedOut,
    activeKebab: ActiveKebab,
};
