import { Flex } from "@chakra-ui/react";
import { List } from "phosphor-react";
import React from "react";
import { IListprops } from "../interfaces/IListprops";


export const ListIsOpen: React.FC<IListprops> = ({ onclick }: IListprops) => {

    return (
        <>
            <Flex
                pl={4}
                ml={4}
                minW={"18px"}
                minH={"15px"}
            >
                <List
                    weight="bold"
                    //color="#A0AEC0"
                    color="orange"
                    size={'24px'}
                    onClick={onclick}

                />
            </Flex>
        </>
    );
};