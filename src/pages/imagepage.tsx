import React, { useEffect, useState } from 'react'
import * as shared from '@peracto-library/shared'
import { Text } from '../components'

import { getLayout } from '../layouts/lightweight'
import { Image } from '@chakra-ui/core'

const ImagePage = () => {
    return (
        <shared.ui.Stack>
            <Image
                src={'https://d2qp4jvur96lqy.cloudfront.net/files/lamona-placeholder.jpg'}
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
                <shared.ui.Price price={{ value: { inc: 10, ex: 10 } }} />
            </shared.ui.Stack>
        </shared.ui.Stack>
    )
}
export default ImagePage
ImagePage.getLayout = getLayout
