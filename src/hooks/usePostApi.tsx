import { useState, useEffect } from 'react';
import { getUserLocalStorage } from '../context/AuthProvider/util';
import { api } from '../services/api';

const usePostApi = <T extends object>(init: T, apiUrl: string) => {
  const [data, setData] = useState(init); // Inicializado como null ou um valor padrão apropriado
  const [loading, setLoading] = useState(true);
  const auth = getUserLocalStorage()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!auth?.token) {
          throw new Error('Token de autenticação ausente.');
        }

        const config = {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        };

        const response = await api.post(apiUrl, data, config);
        setData(response.data);
      } catch (error) {
        // Trate os erros aqui, por exemplo, definindo um estado de erro
        console.error('Erro na requisição POST:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, data, auth?.token]);

  return { 
    data,
    loading
    };
};

export default usePostApi;
