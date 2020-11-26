import React from 'react'
import { GetServerSideProps } from 'next'
import isString from 'lodash/isString'
import { Box } from '@chakra-ui/core'

const ProductPage = (props: { contentPage }) => {
    const { contentPage } = props

    return contentPage ? (
        <Box data-testid={`content-page`}>
            <p>{contentPage.linkText}</p>
        </Box>
    ) : null
}
export default ProductPage

export const getServerSideProps: GetServerSideProps = async (context) => {
    const contentSlug: string = isString(context.params.slug)
        ? context.params.slug
        : context.params.slug.join('/')

    try {
        const contentPage = await fetch(
            `https://staging-api.lamonasparescouk.pub/menu-items-by-path/${contentSlug}`,
        )
            .then((res) => res.json())
            .then((data) => data)

        if (!contentPage) {
            context.res.writeHead(404, {
                Location: '404',
            })
            context.res.end()
        }

        return {
            props: {
                status: 200,
                contentPage: contentPage || null,
            },
        }
    } catch (e) {
        let contentPage = null

        if (e.response.status === 404) {
            contentPage = await fetch(
                `https://staging-api.lamonasparescouk.pub/menu-items-by-path/${e.response.status}`,
            )
                .then((res) => res.json())
                .then((data) => data)
        }

        return {
            props: {
                status: e.response.status,
                contentPage: contentPage || null,
            },
        }
    }
}
