import React from 'react'
import { theme, DefaultTheme, ThemeProvider } from '@chakra-ui/core'

import '@react-page/core/lib/index.css'

type ThemeProps = DefaultTheme & {
    sizes: any
    colors: any
    breakpoints: any
    fonts: any
}

// [container, breakpoint]
const sizes = {
    sm: ['520px', '576px'],
    md: ['720px', '768px'],
    lg: ['960px', '992px'],
    xl: ['1170px', '1200px'],
}

export const breakpoints = Object.values(sizes).reduce((bp, size) => {
    bp.push(size[1])
    return bp
}, []) as any

export const containers = Object.values(sizes).reduce((bp, size) => {
    bp.push(size[0])
    return bp
}, []) as any

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

containers.sm = containers[0]
containers.md = containers[1]
containers.lg = containers[2]
containers.xl = containers[3]

export const Theme: ThemeProps = {
    ...theme,
    breakpoints,
    sizes: {
        ...theme.sizes,
        containers,
        breakpoints: Object.entries(sizes).reduce((bp, size) => {
            bp[size[0]] = size[1][1]
            bp[`${size[0]}Raw`] = Number.parseInt(size[1][1].replace('px', ''), 10)
            return bp
        }, {} as any),
    },
    colors: {
        ...theme.colors,
        brand: {
            green: '#5DBA23',
            lightgreen: '#EEF7E8',
            red: '#C20016',
            black: '#333333',
            grey: '#D8D8D8',
            darkgrey: '#D8D8D8',
            lightgrey: '#F2F2F2',
            white: '#FFFFFF',
        },
    },
    fonts: {
        ...theme.fonts,
    },
}

// Custom helper to easily apply theme providers to components (for stories/testing etc.)
const withProviders: React.FC = ({ children }) => (
    <ThemeProvider theme={Theme}>{children}</ThemeProvider>
)

export { withProviders as ThemeProvider }
