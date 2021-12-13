import React, { useRef } from 'react';
import useSWR, { useSWRConfig } from 'swr'
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
import { useAuth } from '../lib/auth';
import fetcher from '../utils/fetcher';

const AddSite = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const initialRef = useRef();
    const inputSiteRef = useRef();
    const auth = useAuth();
    const { mutate } = useSWRConfig()
    const { data } = useSWR('/api/sites', fetcher)
    
    const createSite = async() => {
        const name = initialRef.current.value;
        const link = inputSiteRef.current.value;
        try {
            const newSite = {name, link, authorId: auth.user.uid, createdAt: new Date().toISOString()}
            await addSite(newSite);
            onClose();
            toast({
                title: "Site Added.",
                description: "We've added your site.",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
              mutate('/api/sites', {...data, newSite}, false)
        } catch (error) {
            console.log(error)
        }
    }
  
    return (
      <>
        <Button onClick={onOpen} {...props}>{props.children}</Button>
  
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
