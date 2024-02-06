import { Flex } from "@chakra-ui/react"
import { Son } from "./Son"
import { useEffect, useState } from "react"

export const Daddy = () => {

    const [name, setName] = useState<string>(
        'Esse conteudo vai ser passado para Son'
    );
    const [number, setNumber] = useState<number>(0);

    const Add = ():void => {
        setNumber(number + 1);
    } 
       
    return (
        <Flex w={'100%'} bg={'green'}>
            I'm Daddy
            <br />
            <Flex>
                {number}
            </Flex>
            <br />
            <Son  onClick={() => Add()} text={name} />
        </Flex>


    )
}