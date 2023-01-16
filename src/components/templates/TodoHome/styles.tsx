import styled from 'styled-components';
import { Breakpoints } from '../../../themes/';

export const Wrapper = styled.div`
    padding-left: 10px;
    width: 500px;
    margin: 0 auto;

    @media ${Breakpoints.mobile} {
        width: auto;
        margin: 0;
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px 10px 15px 0;
`;

export const TextInputWrapper = styled.div`
    flex: 1;
`;

export const BodyWrapper = styled.div``;

export const NoTodoWrapper = styled.div`
    margin-top: 100px;
`;

export const FloatButtonWrapper = styled.div`
    position: fixed;
    bottom: 25px;
    right: 25px;
`;