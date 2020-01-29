import React, { useCallback } from 'react';

import useApi from './hooks/useApi';
import useTabStatus from './hooks/useTabStatus';
import useInterval from './hooks/useInterval';

const withApp = (Component) => (props) => {
    const { data, refetch } = useApi();
    const { hasFocus } = useTabStatus();
    useInterval(useCallback(() => {
        if (hasFocus) {
            refetch();
        }
    }, [hasFocus, refetch]), 1000);

    return (
        <Component
            {...props}
            data={data}
            refetch={refetch}
        />
    );
};

function AppA(props) {
    const { data } = props;

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

function AppB(props) {
    const { data } = props;

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

export const AppV1 = withApp(AppA);
export const AppV2 = withApp(AppB);
