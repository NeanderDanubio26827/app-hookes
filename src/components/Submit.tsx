import { MouseEvent, useState } from "react";
import { api } from "../services/api";

export const Submit = <T extends object>(init: T, url: string) => {

    const [data, setData] = useState(init);
    console.log(data);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const urlApi  = url;

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await api
            .post(`${urlApi}`, data)
            .then((response) => {
                if (response.status === 200) {
                    alert(`Dados enviados à API`);
                    setData({
                        ...data,
                        
                    });
                    setIsLoading(!isLoading);

                } else {
                    alert(`Error: Dados não foram enviados`);
                }
            })
            .catch((error) => {
                console.error(error);
                alert("Erro ao enviar dados para a API.");
            })
            .finally(() => {
                setIsLoading(!isLoading);
            });
    }

    return {
        handleSubmit,
        data,
        ... data
        
    }
}