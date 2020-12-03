import React from 'react'
import { primary, secondary, success } from './variants'
const variants = {
    primary,
    secondary,
    success,
}
type variantType = 'primary' | 'secondary' | 'success'

import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/core'
import { darken, lighten } from 'polished'

export type ButtonProps = Omit<ChakraButtonProps, 'variant'> & {
    children: React.ReactNode
    variant?: variantType
    variantStyle?: `solid` | `outline` | `ghost` | `link`
    isDark?: boolean
    isDisabled?: boolean
    bold?: boolean
    underline?: boolean
    italic?: boolean
    uppercase?: boolean
    strikethrough?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        children,
        variant = 'primary',
        variantStyle = 'solid',
        isDark,
        isDisabled,
        bold,
        underline,
        italic,
        uppercase,
        strikethrough,
        ...restProps
    } = props
    const hoverColor = {
        ...(!isDisabled && {
            _hover: {
                color: `white`,
                bg: isDark
                    ? lighten(0.15, variants[variant].accentColor)
                    : darken(0.05, variants[variant].accentColor),
            },
            _active: {
                bg: isDark
                    ? lighten(0.18, variants[variant].accentColor)
                    : darken(0.08, variants[variant].accentColor),
            },
        }),
    }
    const textStyles = {
        ...(bold && { fontWeight: 'bold' }),
        ...(underline && { textDecoration: 'underline' }),
        ...(strikethrough && { textDecoration: 'line-through' }),
        ...(italic && { fontStyle: 'italic' }),
    }

    return (
        <ChakraButton
            variant={variantStyle}
            color={variants[variant].textColor}
            fontFamily={`body`}
            isDisabled={isDisabled}
            {...textStyles}
            {...{
                ...variants[variant][`sharedProps`],
                ...(variantStyle === `solid` && {
                    bg: variants[variant].accentColor,
                    ...hoverColor,
                    ...variants[variant].solidProps,
                }),
                ...(variantStyle === `outline` && {
                    ...hoverColor,
                    borderColor: variants[variant].accentColor,
                    ...variants[variant].outlineProps,
                }),
                ...(variantStyle === `ghost` && { ...hoverColor, ...variants[variant].ghostProps }),
                ...(variantStyle === `link` && {
                    padding: '',
                    ...{ ...(isDisabled && { _hover: { textDecoration: `none` } }) },
                    _active: { color: darken(0.05, variants[variant].textColor) },
                    ...variants[variant].linkProps,
                }),
                ...restProps,
            }}
        >
            {children}
        </ChakraButton>
    )
}

Button.defaultProps = {
    isDark: false,
    isDisabled: false,
    variant: 'primary',
    variantStyle: 'solid',
}
