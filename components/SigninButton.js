import { Button } from '@chakra-ui/react'
import React from 'react'

const SigninButton = ({children, ...props}) => {
    return (
        <Button  {...props}>
            {
                children
            }
        </Button>
    )
}

export default SigninButton
