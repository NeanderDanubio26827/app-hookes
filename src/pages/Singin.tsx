import { Flex } from "@chakra-ui/react";
import { FormSingin } from "../components/FormSingin";


export const Singin = () => {
    return (
        <Flex
        flexDirection={'column'}
        bg={'pink.300'}
        align={'center'}
        justify={'center'}
        h={'100vh'}
        >
            <FormSingin password={""} username={""}  />
        </Flex>
    );
}