import React from 'react'
import { CSSReset } from '@chakra-ui/core'
import { Global } from '@emotion/core'
import { Meta } from '../components/Meta'
import dynamic from 'next/dynamic'
import {globalStyles} from '../styles'

const ThemeProvider = dynamic((import('../styles/chakra-theme').then(mod => mod.ThemeProvider)),{ssr:false})
const Stack = dynamic((import('../node_modules/@peracto-library/shared').then(mod => mod.ui.Stack)),{ssr:false})


export type SharedProps = {
    withFooterMargin?: boolean
    isWhite?: boolean
}

export const Shared: React.FC<SharedProps> = (props) => {
    const { children, isWhite, ...restprops } = props
    return (
        <ThemeProvider>
                <CSSReset />
                <Global styles={globalStyles} />
                <Meta />
                <Stack
                    {...restprops}
                    {...(isWhite
                        ? { backgroundColor: `brand.white` }
                        : { backgroundColor: `brand.lightgrey` })}
                >
                    {children}
                </Stack>
        </ThemeProvider>
    )
}
