import { useState, useEffect } from 'react';

function useTabStatus() {
    const [hasFocus, setHasFocus] = useState(window.document.hasFocus());

    useEffect(() => {
        const handleFocus = () => {
            setHasFocus(true);
        };
        const handleBlur = () => {
            setHasFocus(false);
        };
        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);

        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
        };
    }, []);

    return { hasFocus };
}

export default useTabStatus;
