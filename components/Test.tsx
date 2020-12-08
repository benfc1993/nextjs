import React, { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import { PriceProps } from '@peracto-library/shared/dist/types/ui'

const Span = dynamic(() => import('../node_modules/@peracto-library/shared').then((mod) => mod.ui.Span),{ssr:false})

const Price: ComponentType<PriceProps> = dynamic(() => import('../node_modules/@peracto-library/shared').then((mod) => mod.ui.Price),{ssr:false})

export const Test: React.FC = () => (
    <>
        <Span>Test</Span>
        <Price price={{value: {inc: 1000, ex: 430}}}/>
    </>
)
