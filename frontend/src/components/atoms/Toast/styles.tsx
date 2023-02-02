import { createGlobalStyle } from 'styled-components';
import { Palette } from '../../../themes';

export const ToastGlobalStyle = createGlobalStyle`
    .ant-notification-notice {
        background: ${Palette.green};
        box-shadow: none;
        padding: 0;
        border-radius: 4px; 
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 32px;
        width: auto;
        padding: 3px 22px;
    }

    .ant-notification-notice-message {
        padding: 0 !important;
        margin: 0 !important;
        font-size: 14px !important;
    }
`;
