import styled from 'styled-components';
import { Breakpoints } from '../../../themes/';

export const Wrapper = styled.div`
    padding-left: 10px;
    padding-bottom: 60px;
    width: 500px;
    margin: 18px auto;

    @media ${Breakpoints.mobile} {
        width: auto;
        margin: 18px 24px;
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px 10px 15px 0;
`;

export const TextInputWrapper = styled.div`
    flex: 1;
    position: relative;
`;

export const CoverWrapper = styled.div`
    position: absolute;
    z-index: 10;    
    height: 100%;
    width: 100%;
    cursor: pointer;
    border-radius: 4px;
    
    &:hover {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    }
`;

export const BodyWrapper = styled.div`
    min-height: 300px;
`;

export const TodoListWrapper = styled.div`
    padding: 2px 8px;
`;

export const NoTodoWrapper = styled.div`
    margin-top: 100px;
`;

export const FloatButtonWrapper = styled.div`
    position: fixed;
    bottom: 25px;
    right: 25px;
`;