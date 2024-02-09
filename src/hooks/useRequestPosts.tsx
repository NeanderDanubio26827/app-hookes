
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { getUserLocalStorage } from "../context/AuthProvider/util";

const auth = getUserLocalStorage()

const config = {
    headers: {

      Authorization: `Bearer ${auth?.token}`,
    },
};

export const useRequestPosts = <T extends object> (url: string, init: T) => {

    const [ data, setData] = useState(init); 
        useEffect (() => {            
                const fetchData = async () => {
                    try {
                        const response = await api.post(url, init, config)
                        setData(response.data)
                    }
                    catch (error) { 
                        console.log("Error fetching data", error);
                    }                
                } 
                fetchData(); 
        },[url, data, init]);
        return {
            data,
            setData,
        }
} 