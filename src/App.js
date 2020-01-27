import React, { useCallback } from 'react';

import useApi from './hooks/useApi';
import useTabStatus from './hooks/useTabStatus';
import useInterval from './hooks/useInterval';

// puedes reutilizar withApp por ejemplo en withSelect withButton withPhotoPicker
// with* seria como el controlador y el componente que se le pasa seria la vista

// A/B testing

// easier testing with mocks

const withApp = (WrappedComponent) => (props) => {
    const { data, refetch } = useApi();
    const { hasFocus } = useTabStatus();
    useInterval(useCallback(() => {
        if (hasFocus) {
            refetch();
        }
    }, [hasFocus, refetch]), 1000);

    return (
        <WrappedComponent
            {...props}
            data={data}
        />
    );
};

function App(props) {
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

export default withApp(App);
