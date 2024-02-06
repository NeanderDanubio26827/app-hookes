import {

    Flex,
    Button,
    //useToast,

} from '@chakra-ui/react'

import { MyInput } from './MyInput'
import { useForm } from '../hooks/useForm';
import { IFormGetAPI } from '../pages/Posts';
//import { api } from '../services/api';
//import { FormEvent, useState } from 'react';
import { getUserLocalStorage } from '../context/AuthProvider/util';
//import { Navigate } from 'react-router-dom';
import { useRequestPost } from '../hooks/useRequestPost';

export const FormPost: React.FC<IFormGetAPI> = () => {
    /* const toast = useToast();
    const auth = getUserLocalStorage()
    const [isButton, setIsButton] = useState(true);
    const [isLoading, setIsLoading] = useState(false); */
    const { formData, handleChange } = useForm<IFormGetAPI>({
        Id: 0,
        IdUser: 0,
        Title: '',
        Text: '',
        username: '',
        updatedAt: '',
        createdAt: '',
    })
    const { Title, Text } = formData;

    const data = { Title: Title, Text: Text , IdUser: getUserLocalStorage()?.IdUser, username: getUserLocalStorage()?.username };

    const { handleSubmit } = useRequestPost(data, '/session/insertPost', ''); 

    /* const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const config = {
            headers: {
              Authorization: `Bearer ${auth?.token}`,
            },
        };
        await api
            .post('/session/insertPost', data, config)
            .then((response) => {
                if (response.status === 200) {
                    toast({
                        title: 'Parabéns!',
                        description: 'Dados enviados.',
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                        position: 'top',
                    });
                    
                    setIsButton(!isButton)
                    setIsLoading(!isLoading);
                    <Navigate to={'/session/posts'}/>

                } else {
                    toast({
                        title: 'Erro',
                        description: 'Dados não enviados.',
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                        position: 'top',
                    });
                    setIsButton(!isButton)
                }
            })
            .catch((error) => {
                console.error(error);
                toast({
                    title: 'Erro',
                    description: 'Dados não enviados.',
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: 'top',
                });
                setIsButton(!isButton)
            })
            .finally(() => {
                setIsLoading(!isLoading);
                setIsButton(!isButton)
            });
    }
 */
    return (
        <Flex
            w={{ xl: '450px', lg: "450px", md: "450px", sm: '350px', base: '350px' }}
            h={{ xl: '350px', lg: '350px', md: '350px', sm: '350px', base: '350px' }}
            flexDirection="column"   
            mt={2}
            //border="1px solid pink"
            borderRadius="14px"
            bg="whitesmoke"
            gap={6}
        >
            <Flex
                flexDirection="column"
                justifyContent={'space-between'}
            >
                <Flex flexDirection={'column'}
                    m={8}>
                    <MyInput text={"Título do Post"} type={'text'} title={"Título"} name={'Title'} value={Title} handleChange={handleChange} />
                    <MyInput text={"Messagem"} type={'textarea'} name={'Text'} title={"Post"} value={Text} handleChange={handleChange} />
                    </Flex>
                
                <Flex
                    align={'center'}
                    justifyContent={'center'}
                    pt={14}
                >
                    <Button
                        colorScheme='messenger'
                        variant='solid'
                        color={'white'}
                        w={'100vw'}
                        mr={8}
                        ml={8}
                        onClick={handleSubmit}
                    >
                       Enviar Post
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}


