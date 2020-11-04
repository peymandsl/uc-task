import { useState, useEffect } from "react";

const useDebounce = (value, delay = 100) => {
    const [debounceValue, setDebounceValue] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debounceValue;
};

export default useDebounce;
