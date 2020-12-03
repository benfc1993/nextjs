import React from 'react'
import * as shared from '@peracto-library/shared'
import { Meta } from '../components/Meta'

export type SharedProps = {
    withFooterMargin?: boolean
    isWhite?: boolean
}

export const Shared: React.FC<SharedProps> = (props) => {
    const { children, isWhite, ...restprops } = props
    return (
        <>
            <Meta />
            <shared.ui.Stack
                {...restprops}
                {...(isWhite
                    ? { backgroundColor: `brand.white` }
                    : { backgroundColor: `brand.lightgrey` })}
            >
                {children}
            </shared.ui.Stack>
        </>
    )
}
