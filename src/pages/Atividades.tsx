import { useState } from "react";
import { IListOnOff } from "../interfaces/IListOnOff";
import { Flex } from "@chakra-ui/react";
import { MyDrawer } from "../components/MyDrawer";
import { Header } from "../layout/Header";
import { NavBar } from "../layout/NavBar";
//import roses from '../assets/img/roses.jpg'
import { MyCard } from "../components/MyCard";
import swim from "../assets/img/swimming.jpg"; 
import study from "../assets/img/study.jpg"
import church from "../assets/img/church.jpg"
import { getUserLocalStorage } from "../context/AuthProvider/util";

export const Atividades: React.FC<IListOnOff> = () => {
    const [isOpen, setIsOpen] = useState(true)

    const onClickOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Flex align={'center'} flexDirection={'column'} 
        //bgImage={`${roses}`} 
        //bgRepeat={{base:'repeat', sm: 'repeat'}} 
        //bgSize={'cover'} 
        bg={'#7b3433'}
        //h={'100vh'}
        minH={'100vh'}
        >

            <Header isOpen={isOpen} onclick={onClickOpen} />
            <NavBar />
            <Flex fontSize={20} w={'fit-content'}  position={'sticky'} fontWeight={600} color={'#c86797'} style={{
                animation: 'rotateHorizontal 5s linear infinite, scale 0.9s ease',
            }}
            >
                Atividades
            </Flex>
            <Flex flexDirection={'column'} gap={4} mt={10} mb={10}>
                <MyCard  username={`${getUserLocalStorage()?.username}`} img={study} Title="Escola" Text="Eu amo minha escola" />
                <MyCard  username="" img={swim} Title="Natação" Text="Eu adoro nadar" />
                <MyCard username="" img={church} Title="Igreja" Text="Eu amo meu JESUS" />
            </Flex>
            <MyDrawer isOpen={isOpen} onClickOpen={onClickOpen} />
        </Flex>
    )
}; 