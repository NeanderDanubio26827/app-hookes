import { FormControl, Input, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface IMyInput {
    text: string;
    name: string;
    title: string;
    mb?: string; 
    value?: string;
    type: string;
    handleChange: (target: ChangeEvent<HTMLInputElement>) => void;
}

export const MyInput = (props: IMyInput) => {
    const { name, title, text, mb, value, type } = props;
    return (
        <>
        <FormControl>

            <Text mb={mb || '8px'}>{title}:</Text>
            <Input
                required
                placeholder={text}
                borderRadius={'8px'}
                name={name}
                p={6}
                value={value}
                type={type}
                onChange={props.handleChange}
                
                />
                </FormControl>
        </>
    );
};
