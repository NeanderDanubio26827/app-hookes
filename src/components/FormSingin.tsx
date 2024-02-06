
import { useForm } from "../hooks/useForm";
import { Button, Flex, FormControl, FormLabel, Text, useToast } from "@chakra-ui/react";
import { MyInput } from "./MyInput";
import { Switch } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";
import React, { useState } from "react";

interface IForm {
    password: string;
    username: string;
}

export const FormSingin: React.FC<IForm> = () => {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const auth = useAuth();
    const navigate = useNavigate();
    const { formData, handleChange } = useForm<IForm>({
        username: '',
        password: '',
    })
    const { username, password } = formData;


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("botão de login acionado")
        try {
            setIsLoading(true);
            // Faça a autenticação
            await auth.authenticate(username, password);
            //console.log(login, senha)
            // Navegue para a página desejada após a autenticação
            setIsLoading(!isLoading);
            toast({
                title: 'Parabéns',
                description: 'Login realizado com sucesso.',
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top',
            });
            navigate('/session/posts');
            
        } catch (error) {
            toast({
                title: 'Erro ao fazer login',
                description: 'Verifique suas credenciais e tente novamente.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top',
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Flex
            w={{ xl: '450px', lg: "450px", md: "450px", sm: '350px', base: '350px' }}
            h={{ xl: '550px', lg: '550px', md: '550px', sm: '550px', base: '550px' }}
            flexDirection="column"
            //border="1px solid pink"
            borderRadius="14px"
            bg="whitesmoke"
            gap={6}

        >
            <Flex
                flexDirection="column"
                justifyContent={'space-between'}
            >
                <Text fontWeight={600} fontSize={'20px'} align={'center'} justifyContent={'center'} pt={6}>
                    Acesse
                </Text>
                <Flex flexDirection={'column'}
                    m={8}>
                    <MyInput text={"Seu usuário"} type={'text'} title={"Username"} name={'username'} value={username} handleChange={handleChange} />
                    <MyInput text={"Sua senha"} type={'password'} name={'password'} title={"Password"} value={password} handleChange={handleChange} />
                </Flex>
                <Flex pt={4}
                    mr={8}
                    ml={8}
                >
                    <FormControl display='flex' alignItems='center'>

                        <Switch id='email-alerts' />
                        <FormLabel htmlFor='email-alerts' mb='0' pl={4}>
                            Remember me
                        </FormLabel>
                    </FormControl>
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
                        Entrar
                    </Button>
                </Flex>

                    <Text textAlign={'center'} pt={10}>
                        Ainda não possui conta? 
                <Link to="/singup">
                        
                        <Text fontWeight={600}> 
                        Registre-se 
                        </Text>
                        
                </Link>
                    </Text>

            </Flex>
        </Flex>
    );

}

