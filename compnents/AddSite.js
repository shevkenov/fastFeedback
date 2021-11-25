import React, { useRef } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/hooks';
import { addSite } from '../lib/firestore';
import { useToast } from "@chakra-ui/react"

const AddSite = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const initialRef = useRef();
    const inputSiteRef = useRef();

    const createSite = async() => {
        const name = initialRef.current.value;
        const link = inputSiteRef.current.value;
        try {
            await addSite({name, link});
            onClose();
            toast({
                title: "Site Added.",
                description: "We've added your site.",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
        } catch (error) {
            console.log(error)
        }
    }
  
    return (
      <>
        <Button onClick={onOpen}>Add your first site</Button>
  
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add site</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder="Name" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Link</FormLabel>
                <Input ref={inputSiteRef} placeholder="Website Link" />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createSite}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default AddSite
