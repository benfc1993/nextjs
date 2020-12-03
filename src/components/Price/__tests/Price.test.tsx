import React from 'react'
import { Price } from '..'
import { renderWithTheme } from '../../../styles/chakra-theme'
import { fakeData } from '@peracto-library/shared'

describe('Price', () => {
    it('matches the previous snapshot', () => {
        const { asFragment } = renderWithTheme(<Price product={fakeData.ApiProduct} />)
        expect(asFragment()).toMatchSnapshot()
    })
})
