import { useRef, useEffect } from "react";

const useMounted = () => {
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    return isMounted;
};

export default useMounted;
