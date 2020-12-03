import React from 'react'
import { BoxProps, Text as ChakraText } from '@chakra-ui/core'

const textMapping: { [id: string]: string } = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
}

export type TextProps = BoxProps & {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'subText' | 'small'
    bold?: boolean
    underline?: boolean
    italic?: boolean
    uppercase?: boolean
    strikethrough?: boolean
    center?: boolean
}

export const Text: React.FC<TextProps> = (props) => {
    const {
        children,
        type,
        bold,
        underline,
        italic,
        uppercase,
        strikethrough,
        center,
        ...restProps
    } = props
    const types = {
        h1: { fontSize: '36px' },
        h2: { fontSize: { base: '24px', lg: '30px' } },
        h3: { fontSize: '24px' },
        h4: { fontSize: '20px' },
        h5: { fontSize: '18px' },
        body: { fontSize: '16px' },
        subText: { fontSize: '14px' },
        small: { fontSize: '12px' },
    }
    return (
        <ChakraText
            as={type && Object.keys(textMapping).includes(type) ? textMapping[type] : (`p` as any)}
            lineHeight={`1.5`}
            fontFamily={`inherit`}
            {...(bold && { fontWeight: `bold` })}
            {...(italic && { fontStyle: `italic` })}
            {...(underline && { textDecoration: `underline` })}
            {...(uppercase && { textTransform: `uppercase` })}
            {...(strikethrough && { textDecoration: `line-through` })}
            {...(center && { textAlign: `center` })}
            {...types[type || 'body']}
            {...restProps}
        >
            {children}
        </ChakraText>
    )
}

Text.defaultProps = {
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    uppercase: false,
    center: false,
}
