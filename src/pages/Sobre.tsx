import { Flex } from "@chakra-ui/react"
import { IListOnOff } from "../interfaces/IListOnOff";
import { useState } from "react";
import { NavBar } from "../layout/NavBar";
import { Header } from "../layout/Header";
import { MyDrawer } from "../components/MyDrawer";

export const Sobre: React.FC<IListOnOff> = () => {
    const [isOpen, setIsOpen] = useState(true)

    const onClickOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Flex align={'center'} flexDirection={'column'} 
        //bgImage={`${flower}`} 
        //bgRepeat={{base:'repeat', sm: 'repeat'}} 
        //bgSize={'cover'} 
        bg={'#7b3433'}
        minH={'100vh'}
        >

            <Header isOpen={isOpen} onclick={onClickOpen} />
            <NavBar />
            <Flex  fontSize={20} w={'fit-content'}  position={'sticky'} fontWeight={600} color={'#c86797'} style={{
                animation: 'rotateHorizontal 5s linear infinite, scale 0.9s ease',
            }}
            >
               Sobre mim
            </Flex>
            <Flex fontWeight={600} color={'#c86797'} align={'center'} justify={'center'} flexDirection={'column'} gap={4} m={20}>
                Sou a Ashlie Beatriz
                <Flex>

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolorem est deserunt ratione! Quis, debitis odit? Adipisci architecto iusto, explicabo praesentium illo, atque modi temporibus, veritatis esse tempore laboriosam ipsam?
                </Flex>
            </Flex>
            <MyDrawer isOpen={isOpen} onClickOpen={onClickOpen} />
        </Flex>
    )
}