import { useRouter } from 'next/router'

import endpoints from '../endpoints'

type SiteFooterProps = {
    stripped?: boolean
    showSubscribeBlock?: boolean
}

const SiteFooter = ({ stripped, showSubscribeBlock }: SiteFooterProps) => {
    const router = useRouter()

    return <></>
}

export default SiteFooter
