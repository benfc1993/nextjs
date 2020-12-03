import endpoints from '../endpoints'
import { useRouter } from 'next/router'
import { useAuth } from '@peracto/peracto-auth'

import { useCallback, useEffect } from 'react'
import * as ls from 'local-storage'
import { Observer } from 'mobx-react'

const SiteHeader = ({ stripped }: { stripped?: boolean }) => {
    const router = useRouter()
    const { user, login, logout, loading } = useAuth()

    return <></>
}

export default SiteHeader
