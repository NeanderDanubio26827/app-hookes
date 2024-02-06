import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Icon,
  } from '@chakra-ui/react'
import { GiFlowerEmblem } from 'react-icons/gi';
import  imgflower  from '../assets/img/imgflower.jpg';
import { FaSwimmer } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

interface IDrawerProps {
  isOpen: boolean;
  onClickOpen: () => void;
}

export const MyDrawer: React.FC<IDrawerProps> = (props: IDrawerProps) => {
  
    return (
      <>
      <Flex display={{base: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'}}>
        <Drawer
          isOpen={props.isOpen}
          placement='right'
          onClose={props.onClickOpen}
        >
          <DrawerOverlay />
          <DrawerContent 
          bgImage={`${imgflower}`}
            >
            <DrawerCloseButton />
            <DrawerHeader color={'green'} >Menu</DrawerHeader>
  
            <DrawerBody alignItems={'center'} justifyContent={'space-between'} h={'100vh'}>
            <Flex flexDirection={'column'} justifyContent={'space-evenly'} align={'center'} gap={6}>
            
            <Flex flexDirection={'row'} justifyContent={'space-between'} gap={4} align={'center'} w={'100%'}>

            <Flex>
                <GiFlowerEmblem color="yellow" size={30} style={{
                  animation: `
                  rotate 1s linear infinite,
                  scale 0.5s ease`,
                }}
                />
                
            </Flex>
            <Flex>
                <GiFlowerEmblem color="blue" size={30} style={{
                  animation: `
                  rotate 1s linear infinite,
                  scale 0.5s ease`,
                }}
                />
                
            </Flex>
                </Flex>
                <Link to={'/session/sobre'}>
            <Flex color={'green'} fontWeight={600} align={'center'} justify={'center'} gap={2}><Icon as={BsQuestionDiamondFill} />Sobre</Flex>
                
                </Link>
                <Link to={'/session/atividades'}>
            <Flex color={'green'} fontWeight={600} align={'center'} justify={'center'}gap={2}><Icon as={FaSwimmer} />Atividades</Flex>
                
                </Link>
                <Link to={'/session/posts'}>
            <Flex color={'green'} fontWeight={600} align={'center'} justify={'center'}gap={2}><Icon as={FaPencilAlt} />Posts</Flex>
                
                </Link>
                <Link to={'/session/mais'}>
            <Flex color={'green'} fontWeight={600} align={'center'} justify={'center'}gap={2}><Icon as={CiCircleMore} />Mais</Flex>
                
                </Link>
            <Flex flexDirection={'row'} justifyContent={'space-between'} gap={4} align={'center'} w={'100%'}>

            <Flex>
                <GiFlowerEmblem color="green" size={30} style={{
                  animation: `
                  rotate 1s linear infinite,
                  scale 0.5s ease`,
                }}
                />
                
            </Flex>
            <Flex>
                <GiFlowerEmblem color="red" size={30} style={{
                  animation: `
                  rotate 1s linear infinite,
                  scale 0.5s ease`,
                }}
                />
                
            </Flex>
                </Flex>
                  </Flex>
              
            </DrawerBody>
  
            <DrawerFooter>
              
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
                </Flex>
      </>
    )

}
