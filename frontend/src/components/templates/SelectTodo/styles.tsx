import styled from 'styled-components';

import { Breakpoints } from '../../../themes';

export const Wrapper = styled.div`
    width: 500px;
    margin: 18px auto;

    @media ${Breakpoints.mobile} {
        width: auto;
        margin: 18px;
    }
`;

export const SelectListWrapper = styled.div`
    margin-top: 16px;
    padding: 0 18px;
`;

export const NoTodoWrapper = styled.div`
    margin-top: 100px;
`;

export const TodoSelectListWrapper = styled.div`
    padding: 0px 8px;
`;