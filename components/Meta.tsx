import Head from 'next/head'

export type MetaProps = {
    title?: string
    description?: string
}

export const Meta: React.FC<MetaProps> = (props) => {
    const { title, description } = props
    return (
        <Head>
            <title>{title && `${title} | Test`}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
    )
}
