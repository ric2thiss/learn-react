import { useEffect, useState } from "react";

export function useFetch(callback){
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

        async function loadData(){
            try {
                setIsLoading(true)
                setError(null);
                const result = await callback()
                setData(result)
            } catch (error) {
                setError(error.message)
            }finally{
                setIsLoading(false)
            }
        }

        loadData()

    },[])

    return {
        data,
        isLoading,
        error
    }
}