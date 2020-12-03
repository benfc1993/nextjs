import { css } from '@emotion/core'
import { Theme } from './chakra-theme'

import 'typeface-muli'

// Global styles designs: link to the client's style guide if there is one.

const listStyles = css`
    ul {
        list-style: none;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 20px;
        position: relative;
        li {
            line-height: 30px;
            padding-left: 20px;
            position: relative;
            &:before {
                display: block;
                content: '';
                position: absolute;
                left: 0;
                top: 10px;
                height: 8px;
                width: 8px;
                border-radius: 100%;
                margin-right: 10px;
                background-color: ${Theme.colors.brand.black};
            }
        }
    }
`

const headings = css`
    h1 {
        font-size: 30px;
        line-height: 36px;
        margin-bottom: 10px;

        @media (max-width: 478px) {
            font-size: 24px;
            line-height: 30px;
        }
    }

    h2 {
        font-size: 28px;
        line-height: 34px;
        margin-bottom: 15px;

        @media (max-width: 478px) {
            font-size: 22px;
            line-height: 28px;
        }
    }

    h3 {
        font-size: 24px;
        line-height: 30px;

        @media (max-width: 478px) {
            font-size: 20px;
            line-height: 26px;
        }
    }

    h4 {
        font-size: 18px;
        line-height: 24px;
    }

    h5 {
        font-size: 16px;
        line-height: 22px;
    }

    h6 {
        font-size: 14px;
        line-height: 20px;
    }
`

export const globalStyles = css`
    ${listStyles}
    ${headings}
`
