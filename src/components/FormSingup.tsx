
import { useForm } from "../hooks/useForm";
import { Button, Flex, FormControl, FormLabel,Text } from "@chakra-ui/react";
import { MyInput } from "./MyInput";
import { Switch } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { FormEvent, useState } from "react";

interface IForm {
    username: string;
    password: string;
    email: string;
    element?: React.ReactNode;
}

export const FormSingup = () => {

    const { formData, handleChange } = useForm<IForm>({
        username: '',
        password: '',
        email: '',

    })
    const [isLoading, setIsLoading] = useState(false);
    const { username, password, email } = formData;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await api
            .post('/session/registerUsers', formData)
            .then((response) => {
                if (response.status === 200) {
                    alert(`Dados enviados à API`);
                    
                    setIsLoading(!isLoading);

                } else {
                    alert(`Error: Dados não foram enviados`);
                }
            })
            .catch((error) => {
                console.error(error);
                alert("Erro ao enviar dados para a API.");
            })
            .finally(() => {
                setIsLoading(!isLoading);
            });
    }

    return (
        <Flex
            w={{ xl: '450px', lg: "450px", md: "450px", sm: '350px', base: '350px' }}
            h={{ xl: '600px', lg: '600px', md: '600px', sm: '600px' , base: '600px' }}
            flexDirection="column"
            //border="1px solid pink"
            borderRadius="14px"
            bg="whitesmoke"
            //height={'fit-content'}
            gap={6}

        >
            <Flex
                flexDirection="column"
                //h={'max-content'}
            >

                <Text fontWeight={600} fontSize={'20px'} align={'center'} justifyContent={'center'} pt={6}>
                    Registre-se
                </Text>
                
                <Flex flexDirection={'column'}
                    m={8}>
                    <MyInput text={"Your Username"} type={'text'} title={"Username"} name={'username'} value={username} handleChange={handleChange} />
                    <MyInput text={"Your Email"} type={'text'} title={"Email"} name={'email'} value={email} handleChange={handleChange} />
                    <MyInput text={"Your password"} type={'password'} name={'password'} title={"Password"} value={password} handleChange={handleChange} />
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
                        Registrar
                    </Button>
                </Flex>

                    <Text textAlign={'center'} pt={10}>
                       Já tem uma conta? 
                        
                <Link to='/singin'>
                        <Text fontWeight={600}> Entrar </Text>
                    
                </Link>
                    </Text>

            </Flex>
        </Flex>
    );

}

