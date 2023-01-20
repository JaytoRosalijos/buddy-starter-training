import styled from 'styled-components';
import { Breakpoints } from '../../../themes/';

export const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;

    @media ${Breakpoints.mobile} {
        width: auto;
        margin: 0;
    }
`;

export const SearchWrapper = styled.div`
    margin: 15px 10px 15px 15px;
`;