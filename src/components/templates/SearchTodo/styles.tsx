import styled from 'styled-components';

import { Breakpoints } from '../../../themes';

export const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;
    @media ${Breakpoints.mobile} {
        width: auto;
        margin: 0;
    }
`;

type SelectListWrapperProps = {
    $showModal: boolean;
};

export const SelectListWrapper = styled.div<SelectListWrapperProps>`
    margin-top: 16px;
    padding: 0 18px;
    margin-bottom: ${props => props.$showModal ? "160px" : "0" };
`;

export const SearchWrapper = styled.div`
    margin: 15px 10px 15px 15px;
`;

export const NoTodoWrapper = styled.div`
    margin-top: 100px;
`;

export const CenterWrapper = styled.p`
    text-align: center;
`;