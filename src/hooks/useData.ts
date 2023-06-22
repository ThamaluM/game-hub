import { AxiosRequestConfig, AxiosResponse, CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient';



interface FetchResponse<T> {
  count: number;
  results: T[];
}



const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);    
  
    useEffect(() => { 
      const controller = new AbortController();
      
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((response: AxiosResponse) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        });

        

        return () => controller.abort();
    }, deps? [...deps]:[]);

    return {data, error, loading}; 
}

export default useData