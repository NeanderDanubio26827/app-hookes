import { Button, Flex } from "@chakra-ui/react"


interface ISon{
    text: string;
    number?: number;
    onClick: () => void
}

export const Son = (props: ISon) => {

    return (
        <Flex align={'center'} justifyContent={'center'}>
            I'm son
            <Flex>
                {props.text}
            </Flex>
            <Button 
            onClick={() => props.onClick()}
            >
                Add on more
            </Button>
        </Flex>
    )
}