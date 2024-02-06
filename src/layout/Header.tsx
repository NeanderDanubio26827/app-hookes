import { Flex, Icon, Input} from "@chakra-ui/react"
import { FaFacebook } from "react-icons/fa";
import { LiaPlayCircleSolid } from "react-icons/lia";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { ListIsOpen } from "./ListIsOpen";
import { IListprops } from "../interfaces/IListprops";
import { BsPersonFillCheck } from "react-icons/bs";
import { useAuth } from "../context/AuthProvider/useAuth";


export const Header: React.FC<IListprops> = (props) => {
    const auth = useAuth();
    
    return (
        <Flex
            flexDirection={'row'}
            w={'full'}
            minH={'70px'}
            bg={'#c86797'}
            justifyContent={'space-between'}
            gap={4}
            align={'center'}
            borderRadius={15}
        >
            <Flex align={'center'} ml={5}  >
                {/* <Flex display={{base: 'none', xl: 'flex', lg: 'flex', md: 'none', sm: 'none'}}>
                    <TbSquareLetterB color="blue.400" size={50} />
                </Flex> */}
                <Flex ml={5} mr={5} flexDirection={'column'}>
                    
                    <Icon as={BsPersonFillCheck } size={35} color={'#e9bbba'} onClick={auth.logout} />
                    <Flex color={'#e9bbba'}>
                        {auth.username}
                    </Flex>
                    
                </Flex>
                <Flex display={{base: 'flex', xl: 'none', lg: 'none', md: 'flex', sm: 'flex'}}>
                    <ListIsOpen onclick={props.onclick}/>
                </Flex>
                <Input type="text" placeholder="Busca" w={500} display={{ base: 'none', xl: 'flex', lg: 'flex', md: 'none', sm: 'none' }} />
            </Flex>
            <Flex>
            </Flex>
            <Flex align={'center'} mr={20} gap={4}>

                <TiSocialInstagramCircular color={'#e9bbba'} size={30} />
                <LiaPlayCircleSolid color={'#e9bbba'} size={30} />
                <FaFacebook color="#e9bbba" size={25} />
            </Flex>

        </Flex>
    )

}