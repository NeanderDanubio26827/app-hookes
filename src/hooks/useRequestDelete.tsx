
import { api } from "../services/api";
import { useToast } from "@chakra-ui/react";
import { getUserLocalStorage } from "../context/AuthProvider/util";

const auth = getUserLocalStorage()

const config = {
  headers: {
    Authorization: `Bearer ${auth?.token}`,
  },
};

export const useRequestDelete = () => {
  const toast = useToast();

  const fetchApi = async (param: string) => {
    try {
      const response = await api.delete(`/session/deletePost/:${param}`, config);
      if (response.status === 200) {
        toast({
            title: "Parabéns!",
            description: "Post removido.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
      } else {
        toast({
          title: 'Erro',
          description: 'Erro interno.',
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'top',
        });
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao chamar a API.");
    }
  };

  return {
    fetchApi,
  };
};
