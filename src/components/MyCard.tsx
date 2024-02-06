import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text as Text2,
  Image,
  Icon,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
//import doll from '../assets/img/doll1.jpg'
import { SlLike } from "react-icons/sl";
//import { SlDislike } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
//import { FcDislike } from "react-icons/fc";
import { FaRegFaceLaughSquint } from "react-icons/fa6";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { BiChat } from "react-icons/bi";
import React, { FormEvent, useState } from "react";
import { api } from "../services/api";
import { getUserLocalStorage } from "../context/AuthProvider/util";

interface ICardProps {
  Id?: number;
  IdUser?: number;
  Title?: string;
  username?: string;
  Text?: string;
  img?: React.ReactNode;
  countLaugh?: number;
  countSad?: number;
  countHeart?: number;
  updatedAt?: string;
  createdAt?: string;
}

export const MyCard: React.FC<ICardProps> = ({
  Id,
  Title,
  Text,
  username,
  countHeart,
  countLaugh,
  countSad,
  //updatedAt,
  //createdAt,
  img,
}: ICardProps) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent, id: number, icon: string) => {
    e.preventDefault();
  
    const auth = getUserLocalStorage();
    const headers = {
      Authorization: `Bearer ${auth?.token}`, 
    };
  
    try {
      const response = await api.patch(`/session/updatePost/:${id}/:${icon}`, {}, { headers });
  
      if (response.status === 200) {
        toast({
          title: "Parabéns!",
          description: "Dados enviados.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Erro",
          description: "Entrou no else.",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro",
        description: "erro do catch.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(!isLoading);
    }
  };
  

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      bg={"#c86797"}
      color={"white"}
      m={4}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        //maxH={'200px'}
        src={`${img}` ? `${img}` : ""}
        alt=""
      />

      <Stack>
        <CardBody>
          <Heading size="md">{Title}</Heading>

          <Text2 py="2">
            {Text
              ? Text
              : "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk."}
          </Text2>
        </CardBody>

        <CardFooter>
          <Flex flexDirection={"column"}>
            <Flex gap={2}>
              <Icon
                onClick={(e) => handleSubmit(e, Id, "SlLike")}
                as={SlLike}
                color={"blueviolet"}
                _hover={{
                  color: "black",
                  cursor: "pointer",
                  transform: "scale(1.4)",
                  transition: "transform 0.3s ease",
                }}
              />

              <Icon
                onClick={(e) => handleSubmit(e, Id, "countHeart")}
                as={FcLike}
                _hover={{
                  color: "black",
                  cursor: "pointer",
                  transform: "scale(1.4)",
                  transition: "transform 0.3s ease",
                }}
              />
              <Icon
                onClick={(e) => handleSubmit(e, Id, "countLaugh")}
                as={FaRegFaceLaughSquint}
                color={"yellow"}
                _hover={{
                  color: "black",
                  cursor: "pointer",
                  transform: "scale(1.4)",
                  transition: "transform 0.3s ease",
                }}
                
              />
     
              <Icon
                onClick={(e) => handleSubmit(e, Id, "countSad")}
                as={FaRegFaceSadTear}
                color={"yellow"}
                _hover={{
                  color: "black",
                  cursor: "pointer",
                  transform: "scale(1.4)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Flex>
            <Flex
              w={"max-content"}
              gap={4}
              align={"center"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
            >
              <Flex>{username}</Flex>
              <Flex>
                <Button
                  color={"white"}
                  fontFamily={"Roboto"}
                  variant="ghost"
                  ml={"auto"}
                  leftIcon={<BiChat />}
                >
                  Comentar
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
};
