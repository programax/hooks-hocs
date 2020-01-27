import { useState, useEffect } from 'react';

const useApi = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const refetch = () => {
        setIsLoading(true);
        setTimeout(() => {
            setData([
                ...data,
                { id: Math.random() , name: 'test' },
            ]);
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        refetch();
    }, []);

    return {
        data,
        isLoading,
        refetch,
    };
};

export default useApi;
