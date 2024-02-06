import { ChangeEvent, useState } from "react"
//forma padrão de usar um useState junto com handleChange

export const useForm = <T extends object>(init: T) => {
    const [ formData, setFormData ] = useState(init);

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {

        const { name , value } = target;

        setFormData({
            ...formData,
            [name] : value
        });
        console.log(name, value);
    }; 

    return {
        formData,
        handleChange,
        ...formData
    }
    
}