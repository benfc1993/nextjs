import React from 'react'
import { addDecorator } from '@storybook/react'
import { Global } from '@emotion/core'
import { CSSReset } from '@chakra-ui/core'
import { globalStyles } from '../src/styles/global'
import { ThemeProvider } from '../src/styles/chakra-theme'

addDecorator((storyFn) => {
    return (
        <ThemeProvider>
            <Global styles={globalStyles} />
            <CSSReset />
            {storyFn()}
        </ThemeProvider>
    )
})
