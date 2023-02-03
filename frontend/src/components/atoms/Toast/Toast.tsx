import React, { useEffect } from 'react';
import { notification as ToastMessage } from 'antd';

import { ToastGlobalStyle } from './styles';

export type ToastProps = {
    message: string;
    show?: boolean;
    duration?: number;
    style?: React.CSSProperties,
    onClose?: () => void;
    placement?: "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight";
    closeIcon?: React.ReactNode;
};

const Toast = ({ 
        message, 
        show, 
        duration = 3, 
        placement = "bottom",
        closeIcon = null,
        style, 
        onClose,  
    }: ToastProps ) => {
    const [toastMessageApi, contextHolder] = ToastMessage.useNotification();
    
    useEffect(() => {
        if (show) {
            toastMessageApi.open({
                message: message,
                duration: duration,
                onClose: onClose,
                placement: placement,
                closeIcon: closeIcon,
                style: style,
            });
        }
    }, [
        show, 
        message, 
        onClose, 
        duration, 
        style, 
        placement, 
        closeIcon, 
        toastMessageApi,
    ]);

    return (
        <>
            <ToastGlobalStyle />
            { contextHolder  }
        </>
    );
};


export default Toast;
