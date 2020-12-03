import React from 'react'
import { Button } from '..'
import { renderWithTheme } from '../../../styles/chakra-theme'

describe('Button', () => {
    it('matches the previous snapshot', () => {
        const { asFragment } = renderWithTheme(<Button>Button Text</Button>)
        expect(asFragment()).toMatchSnapshot()
    })
})
