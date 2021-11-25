import { Button } from '@chakra-ui/button'
import { Heading, Text, VStack } from '@chakra-ui/layout'
import React from 'react'

const FreePlanEmptyState = () => {
    return (
        <VStack spacing="16px" borderRadius="lg" backgroundColor="white" direction="column" align="center" justify="center" p={10}>
            <Heading size="md">Get feedback on your site!</Heading>
            <Text>Start today, than grow with us</Text>
            <Button>Upgrade to starter</Button>
        </VStack>
    )
}

export default FreePlanEmptyState
