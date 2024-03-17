import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { QueryClient } from 'react-query';
import { useEffect, useMemo, useState } from 'react';


export const useCustomQueryClient = () => {
    const [isClientLoaded, setClientLoaded] = useState(false);
    const queryClient = useMemo(() => new QueryClient({
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 60 * 60 * 24,
            },
        }
    }), []);

    useEffect(() => {
        const localStoragePersistor = createWebStoragePersistor({ storage: localStorage })

        persistQueryClient({
            queryClient,
            persistor: localStoragePersistor,
        }).then(() => setClientLoaded(true))

    }, [queryClient])

    return { isClientLoaded, queryClient };
}



