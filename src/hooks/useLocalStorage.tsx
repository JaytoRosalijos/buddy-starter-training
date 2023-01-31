import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, defaultValue: object | null) => {
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            return saved !== null ? JSON.parse(saved) : defaultValue;
        } catch {
            return defaultValue;
        }
    });

    useEffect(() => {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    }, [key, value]);
    
    return [value, setValue];
};