import { useEffect } from 'react';

const useInterval = (callback, time) => {
    useEffect(() => {
        const id = setInterval(callback, time);

        return () => {
            clearInterval(id);
        };
    }, [time, callback]);
};

export default useInterval;
