import { Flex } from "@chakra-ui/react";
import { GiFlowerEmblem } from "react-icons/gi";
import './style.modules.css';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <Flex
            bg={'#e9bbba'}
            w={'100%'}
            //h={{xl:'60px', lg: '60px', md: '60px', sm: 'full', base: 'full'}}
            //align={'center'}
            borderRadius={15}
            justifyContent={{ xl: 'space-evenly', lg: 'space-evenly', md: 'space-evenly', sm: 'space-evenly', base: 'space-evenly' }}
            //justifyContent={'space-evenly'}
            //flexDirection={{base: 'column', xl: 'row', lg: 'row', md: 'row', sm: 'column'}}
            flexDirection={'row'}
            display={{
                base: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
                xl: 'flex'
            }}
        >
            <Flex>
                <GiFlowerEmblem color="blue" size={30} style={{
                    animation: `
                    rotate 1s linear infinite,
                    scale 0.5s ease`,
                }}
                />
            </Flex>
            <Link to={'/session/sobre'}>

                <Flex fontWeight={600}>Sobre</Flex>
            </Link>
            <Link to={'/session/atividades'} >
                <Flex fontWeight={600}>Atividades</Flex>

            </Link>
            <Link to={'/session/posts'} >

                <Flex fontWeight={600}>Posts</Flex>
            </Link>
            <Link to={'/session/mais'} >

                <Flex fontWeight={600}>Mais</Flex>
            </Link>
            <Flex>
                <GiFlowerEmblem color="blue" size={30} style={{
                    animation: `
                    rotate 1s linear infinite,
                    scale 0.5s ease`,
                }}
                />
            </Flex>
        </Flex>
    );
}