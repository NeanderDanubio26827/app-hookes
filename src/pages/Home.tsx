import React, { useState } from "react"
//import { MyDrawer } from "../components/MyDrawer"
import { Header } from "../layout/Header"
import { NavBar } from "../layout/NavBar"
import { IListOnOff } from "../interfaces/IListOnOff"
import { MyDrawer } from "../components/MyDrawer"
import { Flex } from "@chakra-ui/react"
import roses from '../assets/img/roses.jpg'
export const Home: React.FC<IListOnOff> = () => {

    const [isOpen, setIsOpen] = useState(true)

    const onClickOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Flex flexDirection={'column'} bgImage={`${roses}`} bgRepeat={'no-repeat'} bgSize={'cover'} h={'100vh'}>

            <Header isOpen={isOpen} onclick={onClickOpen} />
            <NavBar />
            <MyDrawer isOpen={isOpen} onClickOpen={onClickOpen} />
        </Flex>
           

        </>
    )
}