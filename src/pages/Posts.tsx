import { useState } from "react";
import { IListOnOff } from "../interfaces/IListOnOff";
import { Button, Flex } from "@chakra-ui/react";
import { MyDrawer } from "../components/MyDrawer";
import { Header } from "../layout/Header";
import { NavBar } from "../layout/NavBar";
import { MyCard } from "../components/MyCard";
import { FaPencilAlt } from "react-icons/fa";
import { FormPost } from "../components/FormPost";
import { useRequestGet } from "../hooks/useRequestGet";


export interface IFormGetAPI {
    Id?: number;
    IdUser?: number | undefined;
    Title?: string;
    username?: string;
    Text?: string;
    img?: React.ReactNode;
    countLaugh?: number;
    countSad?: number;
    countHeart?: number;
    updatedAt?: string;
    createdAt?: string;
}


export const Posts: React.FC<IListOnOff> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isButton, setIsButton] = useState(false);
    const { data } = useRequestGet<IFormGetAPI[]>([], '/session/selectPost');
   
    const onClickButton = () => {
        console.log('onClickButton', isButton);
        setIsButton(!isButton);
    };
    const onClickOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Flex align={'center'} flexDirection={'column'} 
        //bgImage={`${roses}`} 
        //bgRepeat={{ base: 'repeat', sm: 'repeat' }} 
        //bgSize={'cover'} 
        minH={'100vh'}
        bg={'#7b3433'}
        >
            <Header isOpen={isOpen} onclick={onClickOpen} />
            <NavBar />
            <Flex fontSize={20} w={'fit-content'} position={'sticky'} fontWeight={600} color={'#c86797'} style={{
                animation: 'rotateHorizontal 5s linear infinite, scale 0.9s ease',
            }}>
                Posts
            </Flex>
            <Flex justify={'left'}>
                <Button
                    leftIcon={<FaPencilAlt />}
                    colorScheme='messenger'
                    variant='solid'
                    color={'white'}
                    w={'120px'}
                    mt={10}
                    onClick={onClickButton}
                >
                    { !isButton ? "Criar Post" : "Cancelar" }
                </Button>
            </Flex>
            <Flex  display={!isButton ? 'none' : 'flex'} align={'center'}>
                <FormPost Id={0} IdUser={0} Title={""} Text={""} username={""} createdAt={''} updatedAt={''} />
            </Flex>

            <Flex flexDirection={'column'} gap={4} mt={10} mb={10}>
                {data ? (
                    data.map((item, index) => (
                        <MyCard
                            key={index}
                            Id={item.Id}
                            Title={item.Title}
                            Text={item.Text}
                            createdAt={item.createdAt}
                            updatedAt={item.updatedAt}
                            username={item.username}
                        />
                ))
                ) : (
                    <p>Loading...</p>
                )}
            </Flex>
            <MyDrawer isOpen={isOpen} onClickOpen={onClickOpen} />
        </Flex>
    );
};
