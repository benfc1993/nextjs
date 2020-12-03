import { AppProps } from 'next/dist/next-server/lib/router/router'
import Layout from 'layouts/default'
import { useStaticRendering } from 'mobx-react'
import { useEffect } from 'react'
import Head from 'next/head'
import * as ls from 'local-storage'

import Router, { useRouter } from 'next/router'
import * as shared from '@peracto-library/shared'
import endpoints from 'endpoints'

import Config from '@peracto/peracto-config'
import { globalStyles, ThemeProvider } from 'styles'
import { CSSReset } from '@chakra-ui/core'
import { Global } from '@emotion/core'
import { AppContextType } from 'next/dist/next-server/lib/utils'
import { LocaleProvider } from 'contexts'

const GTM_KEY = process.env.GTM_KEY || 'GTM-WTXRX28' // default is the carbon container ID. Change this for your project.

if (typeof window === 'undefined') {
    // eslint-disable-next-line
    useStaticRendering(true)
}

const peractoConfig = new Config({
    api: endpoints.baseUrl,
    editorConfig: {
        inputTypes: {},
    },
})

function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = () => {
            ls.set('previousPath', router.asPath)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])

    useEffect(() => {
        // Scroll to top on route change
        // See: https://stackoverflow.com/questions/58008310/next-js-link-doesnt-render-with-page-scrolled-at-the-top
        Router.events.on('routeChangeComplete', () => {
            try {
                window.scroll({
                    top: 0,
                    left: 0,
                })
            } catch (error) {
                // Fallback for older browsers
                window.scrollTo(0, 0)
            }
        })
    }, [])

    const getLayout = Component['getLayout'] || ((page: React.FC) => <Layout children={page} />)

    let canonical = ''

    if (process.env.NEXT_PUBLIC_BASE_URL) {
        canonical += process.env.NEXT_PUBLIC_BASE_URL
    }

    if (router.asPath) canonical += router.asPath

    return (
        <>
            <Head>
                {process.env.NODE_ENV === 'production' && (
                    <>
                        <link rel="canonical" href={canonical} />

                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer', '${GTM_KEY}');
                                `,
                            }}
                        />
                    </>
                )}
            </Head>
            <ThemeProvider>
                <CSSReset />
                <Global styles={globalStyles} />
                <LocaleProvider>{getLayout(<Component {...pageProps} />)}</LocaleProvider>
            </ThemeProvider>
        </>
    )
}

App.getInitialProps = async ({ Component, ctx }: AppContextType) => {
    /* get initial data required for page load such as header/footer data here */
    let pageProps = {}

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps /* , header */ }
}

export default App
