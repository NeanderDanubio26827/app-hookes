
import { api } from "../services/api";
import { getUserLocalStorage } from "../context/AuthProvider/util";

const auth = getUserLocalStorage()

export const getAxios = async (url: string) => {
    const config = {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
    };

  const getResponse = await api
    .get(url, config)
    .then((response) => response)
    .catch((err) => console.log(err));
  return getResponse

};
