import { Flex } from "@chakra-ui/react";
import { FormSingup } from "../components/FormSingup";

export const Singup = () => {
    return (
        <Flex
        flexDirection={'column'}
        bg={'pink.300'}
        align={'center'}
        justify={'center'}
        h={'100vh'}
        >
            <FormSingup />
        </Flex>
    );
}