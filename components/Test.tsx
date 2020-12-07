import React, { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import { PriceProps } from '@peracto-library/shared/dist/types/ui'

const Span = dynamic(() => import('../node_modules/@peracto-library/shared/dist/cjs/ui/Utilities/src/Span').then((mod) => mod.Span), {
    ssr: false,
})

const Price: ComponentType<PriceProps> = dynamic(() => import('../node_modules/@peracto-library/shared/dist/cjs/ui').then((mod) => mod.Price), {
    ssr: true,
})

export const Test: React.FC = () => (
    <>
        <Span>Test</Span>
        <Price price={{value: {inc: 1000, ex: 430}}}/>
    </>
)
