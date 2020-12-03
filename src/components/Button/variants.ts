import { ButtonProps } from '@chakra-ui/core'

type Variant = {
    accentColor: string
    textColor: string
    sharedProps?: Partial<ButtonProps>
    solidProps?: Partial<ButtonProps>
    outlineProps?: Partial<ButtonProps>
    ghostProps?: Partial<ButtonProps>
    linkProps?: Partial<ButtonProps>
}

export const primary: Variant = {
    accentColor: 'rgba(0,0,0,1)',
    textColor: 'rgba(34,34,34,1)',
    sharedProps: { px: '1em', lineHeight: '45px', height: '100%', borderRadius: '4px' },
    solidProps: { color: 'white' },
}

export const secondary: Variant = {
    textColor: 'rgba(34,34,34,1)',
    accentColor: 'rgba(216,216,216,1)',
    sharedProps: {
        px: '1em',
        lineHeight: '45px',
        height: '100%',
        borderRadius: '4px',
    },
}

export const success: Variant = {
    accentColor: 'rgba(45,178,0,1)',
    textColor: 'rgba(45, 178, 0,1)',
    sharedProps: {
        px: '1em',
        lineHeight: '45px',
        height: '100%',
        borderRadius: '4px',
    },
    solidProps: { color: 'brand.white' },
}
