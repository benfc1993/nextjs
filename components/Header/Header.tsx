import React from 'react'
import { Box } from '@chakra-ui/core'

export type HeaderProps = {
    title: string
    text: string
}

const Header: React.FC<HeaderProps> = (props) => {
    const { title, text } = props
    return (
        <Box d={'flex'} flexDir={'column'}>
            <h1>{title}</h1>
            <p>{text}</p>
        </Box>
    )
}

export default Header
