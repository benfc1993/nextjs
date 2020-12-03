import React, { useEffect } from 'react'
import * as shared from '@peracto-library/shared'

import { GetServerSideProps } from 'next'

import endpoints from 'endpoints'

function Home(props: { contentPage: shared.types.ContentPage }) {
    const { contentPage } = props

    return (
        <shared.ui.Stack data-testid="home">
            {contentPage?.content && <shared.ui.ContentPage content={contentPage.content} />}
        </shared.ui.Stack>
    )
}
export default Home
