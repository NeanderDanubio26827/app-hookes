import {   FormEvent,   useState } from "react";
import { getUserLocalStorage } from "../context/AuthProvider/util";
import { api } from "../services/api";
import { useToast } from "@chakra-ui/react";

export const useRequestPost = <T extends object> (init: T, url: string, param?: string) => {
    const [ data, setData ] = useState(init); 
    const [loading, setLoading] = useState(true);
    const auth = getUserLocalStorage()
    const toast = useToast();
    const apiUrlModifier = url + (param !== undefined && param !== null ? `/${param}` : '');

    const config = {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
    };
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();      

        await api
            .post(apiUrlModifier, data, config)
            .then((response) => {
                if (response.status === 200) {
                    toast({
                        title: 'Parabéns!',
                        description: 'Dados enviados.',
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                        position: 'top',
                    });
                    setData({
                        ...data,
                        
                    });
                    setLoading(!loading);              

                } else {
                    toast({
                        title: 'Erro',
                        description: 'Dados não enviados.',
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                        position: 'top',
                    });
                    
                }
            })
            .catch((error) => {
                console.error(error);
                toast({
                    title: 'Erro',
                    description: 'Catch insert: Dados não enviados.',
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: 'top',
                });
              
            })
            .finally(() => {
                setLoading(!loading);  
            })            
    }
  
        return { 
        data,
        handleSubmit, 
        loading,
        ...data,
        }
}; 