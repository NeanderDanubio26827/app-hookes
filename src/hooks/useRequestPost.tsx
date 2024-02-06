import { FormEvent,  useState } from "react";
import { getUserLocalStorage } from "../context/AuthProvider/util";
import { api } from "../services/api";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const useRequestPost = <T extends object> (init: T, url: string, param?: string) => {
    const [ data ] = useState(init); 
    const [loading, setLoading] = useState(true);
    const auth = getUserLocalStorage()
    const toast = useToast();
    const navigate = useNavigate();
    const apiUrl = url + '/' + param;
  
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const config = {
            headers: {
              Authorization: `Bearer ${auth?.token}`,
            },
        };
        await api
            .post(apiUrl, data, config)
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
                    
                    setLoading(!loading);
                    navigate("/session/posts");
                    

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
                    description: 'Dados não enviados.',
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