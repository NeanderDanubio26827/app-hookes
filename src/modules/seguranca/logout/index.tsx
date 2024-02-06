
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import { IdadosMot } from '../../../components/componentesListMot/table';
import { useEffect, useState } from 'react';
import useApi from '../../../api/get';
import { getUserLocalStorage } from '../../../context/AuthProvider/util';

interface ILogout {
    isOpenLogout: boolean;
    onClickLog: () => void;
    onCloseLog: () => void;
}

export const Logout: React.FC<ILogout> = (props) => {

    const auth = getUserLocalStorage()
    const [motData, setMotData] = useState<IdadosMot[]>([]);

    const motApiUrl = "/selectMotOne/" + `${auth?.login}`;
    console.log(motApiUrl)
    const { data: fetchedMotData, loading: motLoading } = useApi(motApiUrl);

    useEffect(() => {
        if (fetchedMotData !== undefined && !motLoading) {
            setMotData(fetchedMotData);
        }
    }, [fetchedMotData, motLoading]);

    const { nomeCompleto, numeral, graduacao, opm, matricula } = motData;
    
    return (

        <>
            <Button onClick={props.onCloseLog}>Open Modal</Button>

            <Modal isOpen={props.isOpenLogout} onClose={props.onCloseLog}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Lorem count={2} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={props.onCloseLog}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}