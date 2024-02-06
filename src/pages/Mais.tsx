import { Flex } from "@chakra-ui/react"
import { IListOnOff } from "../interfaces/IListOnOff";
import { useState } from "react";
//import flower from '../assets/img/imgflower.jpg'
import { NavBar } from "../layout/NavBar";
import { Header } from "../layout/Header";
import { MyDrawer } from "../components/MyDrawer";

export const Mais: React.FC<IListOnOff> = () => {
    const [isOpen, setIsOpen] = useState(true)

    const onClickOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Flex align={'center'} flexDirection={'column'} 
        //bgImage={`${flower}`} 
        //bgRepeat={{ base: 'repeat', sm: 'repeat' }} 
        //bgSize={'cover'} 
        bg={'#7b3433'}
        h={'100vh'}
        >

            <Header isOpen={isOpen} onclick={onClickOpen} />
            <NavBar />
            <Flex  fontSize={20} w={'fit-content'}  position={'sticky'} fontWeight={600} color={'#c86797'} style={{
                animation: 'rotateHorizontal 5s linear infinite, scale 0.9s ease',
            }}
            >
               Mais
            </Flex>
            <Flex fontWeight={600} align={'center'} justify={'center'} flexDirection={'column'} gap={4} m={20}>
                
                <Flex color={'#c86797'}>
                    Minhas Redes Sociais

                </Flex>
                <Flex flexDirection={'column'} color={'#c86797'}>
                    <Flex>
                        Youtube:
                    </Flex>
                    <Flex>

                        Instagram:
                    </Flex>
                </Flex>
            </Flex>
            <MyDrawer isOpen={isOpen} onClickOpen={onClickOpen} />
        </Flex>
    )
}