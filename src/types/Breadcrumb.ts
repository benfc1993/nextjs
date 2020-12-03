import { LinkProps } from 'next/link'
import * as shared from '@peracto-library/shared'

export type Breadcrumb = LinkProps & {
    children: React.ReactNode
    containerProps?: shared.ui.StackProps
}
