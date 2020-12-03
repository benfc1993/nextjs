import { theme, DefaultTheme, ThemeProvider } from '@chakra-ui/core'
import { render, RenderOptions } from '@testing-library/react'

import '@react-page/core/lib/index.css'

type ThemeProps = DefaultTheme & {
    sizes: any
    colors: any
    breakpoints: any
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
            red: '#DD0808',
            paleRed: '#FDF1F2',
            lightGrey: '#F2F2F2',
            grey: '#D8D8D8',
            darkGrey: '#505050',
            black: '#222222',
            white: '#FFFFFF',
            green: '#2DB200',
            paleGreen: '#E9F7E5',
        },
    },
    fonts: {
        ...theme.fonts,
        heading: 'Mulish, sans-serif',
        body: 'Mulish, sans-serif',
    },
}

// Custom helper to easily apply theme providers to components (for stories/testing etc.)
const withProviders: React.FC = ({ children }) => (
    <ThemeProvider theme={Theme}>{children}</ThemeProvider>
)
const customRender: any = (ui: React.ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: withProviders, ...options })

export { customRender as renderWithTheme }
export { withProviders as ThemeProvider }
