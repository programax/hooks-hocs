import React, { useCallback } from 'react';

import useApi from './hooks/useApi';
import useTabStatus from './hooks/useTabStatus';
import useInterval from './hooks/useInterval';

function useApp() {
    const { data, refetch } = useApi();
    const { hasFocus } = useTabStatus();
    useInterval(useCallback(() => {
        if (hasFocus) {
            refetch();
        }
    }, [hasFocus, refetch]), 1000);

    return { data, refetch, hasFocus };
}

export function AppA(props) {
    const { data } = useApp();

    return (
        <div>
            <h1>Counter</h1>
            {data && (
                <ul>
                    {data.map((next) => (
                        <li key={next.id}>{next.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export function AppB(props) {
    const { data } = useApp();

    return (
        <div>
            <h1 className="asdasd">AAAA</h1>
            {data && (
                <ul>
                    {data.map((next) => (
                        <li key={next.id}>{next.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
