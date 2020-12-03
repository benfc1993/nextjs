import React from 'react'
import { Price, PriceProps } from '..'
import { fakeData } from '@peracto-library/shared'

export default {
    title: 'Price',
    component: Price,
}

const baseArgs = {
    product: fakeData.ApiProduct,
}

export const Default = (args: PriceProps) => <Price {...args} />
Default.args = baseArgs

export const LoggedIn = (args: PriceProps) => <Price {...args} />
LoggedIn.args = {
    ...baseArgs,
    loggedIn: true,
}

export const OutOfStock = (args: PriceProps) => <Price {...args} />
OutOfStock.args = {
    ...baseArgs,
    inStock: false,
}

export const ExcludingTax = (args: PriceProps) => <Price {...args} />
ExcludingTax.args = {
    ...baseArgs,
    loggedIn: true,
    incTax: false,
}
