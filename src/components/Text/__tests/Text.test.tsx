import React from 'react'
import { Text } from '..'
import { renderWithTheme } from '../../../styles/chakra-theme'

describe('Text', () => {
    it('matches the previous snapshot', () => {
        const { asFragment } = renderWithTheme(<Text />)
        expect(asFragment()).toMatchSnapshot()
    })
})
