import React, { useEffect, useState } from 'react'
import * as shared from '@peracto-library/shared'
import { Text } from '../components/Text'
import { Price } from '../components/Price'
import { getLayout } from '../layouts/lightweight'
import { Image } from '@chakra-ui/core'

const Test = () => {
    return (
        <shared.ui.Stack>
            <Image
                src={'https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg'}
                objectFit={'cover'}
            />
            <shared.ui.Stack
                pos={'absolute'}
                left={0}
                right={0}
                top={0}
                bottom={0}
                justifyContent={'center'}
                alignItems={'center'}
                color={'#fff'}
            >
                <Text type={'h1'}>This is a test page</Text>
                <Price product={{ slug: '', prices: { '0': { inc: 10, exc: 10 } } }} />
            </shared.ui.Stack>
        </shared.ui.Stack>
    )
}
export default Test
Test.getLayout = getLayout
