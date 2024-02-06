import { useState, useEffect } from 'react';
import { getUserLocalStorage } from '../context/AuthProvider/util';
import { api } from '../services/api';


const useGetApi = <T extends object>(init: T, apiUrl: string, param?: string) => {
  const [data, setData] = useState(init); 
  const [loading, setLoading] = useState(true);
  const auth = getUserLocalStorage();

  const apiUrlModifier = apiUrl + (param !== undefined && param !== null ? `/${param}` : '');

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await api.get(apiUrlModifier, {
            headers: {
              Authorization: `Bearer ${auth?.username}`,
            },
          });
        setData(response.data);
      } catch (error) {
        // Trate os erros aqui, por exemplo, definindo um estado de erro
        console.error('Erro na requisição API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    console.log('chamou a função get');
  }, [apiUrlModifier, auth?.username]);

  return { data, loading };
};

export default useGetApi;
