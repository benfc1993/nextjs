import React from 'react'
import { Flex, Spinner } from '@chakra-ui/core'

export const LoadingSpinner = () => (
    <Flex
        minH={`70vh`}
        w={`100%`}
        justify={`center`}
        align={`center`}
        data-testid={`loading-spinner`}
    >
        <Spinner color={`brand.grey`} />
    </Flex>
)
