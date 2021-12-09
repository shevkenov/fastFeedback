import { Box, Divider, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

const Feedback = ({text, createdAt, author}) => {
    return (
        <Box flexDirection="column">
            <Heading>
                {author}
            </Heading>
            <Text>
                {createdAt}
            </Text> 
            <Text>
                {text}
            </Text>
            <Divider />
        </Box>
    )
}

export default Feedback
