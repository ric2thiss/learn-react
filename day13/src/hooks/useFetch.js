import { useEffect, useState } from "react";

export function useFetch(callback) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController()
        async function loadData() {
            try {
                setIsLoading(true);
                setError(null);

                const result = await callback(controller.signal);
                setData(result);
            } catch (error) {
                if(error.name !== "AbortError"){
                    setError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        loadData();

        return ()=>{
            controller.abort()
        }
    }, []);

    return {
        data,
        isLoading,
        error,
    };
}
