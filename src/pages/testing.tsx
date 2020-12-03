import React, { useEffect, useState } from 'react'

import { getLayout } from '../layouts/lightweight'
import { Box, Image } from '@chakra-ui/core'

const Test = () => {
    return (
        <Box h={'100vh'} w={'100vw'}>
            <Image
                src={'https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg'}
                objectFit={'cover'}
            />
        </Box>
    )
}
export default Test
Test.getLayout = getLayout
