import { Button } from '@chakra-ui/button'
import { Heading, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import AddSite from './AddSite'

const EmptyState = () => {
    return (
        <VStack spacing="16px" borderRadius="lg" backgroundColor="white" direction="column" align="center" justify="center" p={10}>
            <Heading size="md">You haven`t added eny sites</Heading>
            <Text>Welcome 🤘, let`s get started!</Text>
            <AddSite colorScheme='gray'>Add your first site</AddSite>
        </VStack>
    )
}

export default EmptyState
