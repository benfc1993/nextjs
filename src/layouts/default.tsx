import * as shared from '@peracto-library/shared'
import { Observer } from 'mobx-react'
import Header from './header'
import Footer from './footer'
import { useRouter } from 'next/router'
import { RecentlyViewedItems } from 'types'
import { useEffect, useState } from 'react'
import useMedia from 'use-media'

type DefaultLayoutProps = {
    stripped?: boolean
    bg?: string
    showBreadcrumb?: boolean
    showSubscribeBlock?: boolean
    showRecentlyViewed?: boolean
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
    const { stripped, bg, showBreadcrumb, showSubscribeBlock, showRecentlyViewed, children } = props
    const router = useRouter()

    const [localRV, setLocalRV] = useState<RecentlyViewedItems>()

    const isDesktop = useMedia({ minWidth: '992px' })

    return (
        <shared.ui.Stack
            bg={bg || (stripped ? 'brand.lightGrey' : 'brand.white')}
            minH="100vh"
            w="100%"
        >
            <shared.ui.Stack flex={1}>
                <Header stripped={stripped} />
                <shared.ui.Container flex={1}>{children}</shared.ui.Container>

                <Footer stripped={stripped} showSubscribeBlock={showSubscribeBlock} />
            </shared.ui.Stack>
        </shared.ui.Stack>
    )
}

DefaultLayout.defaultProps = {
    stripped: false,
    showSubscribeBlock: true,
    showBreadcrumb: true,
    showRecentlyViewed: true,
}

export const getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>
export const getStrippedLayout = (page: React.ReactNode) => (
    <DefaultLayout stripped showSubscribeBlock={false} showRecentlyViewed={false}>
        {page}
    </DefaultLayout>
)
export const getGreyLayout = (page: React.ReactNode) => (
    <DefaultLayout bg="brand.lightGrey">{page}</DefaultLayout>
)

export default DefaultLayout
