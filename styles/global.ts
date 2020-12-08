import { css } from '@emotion/core'
import { Theme } from './chakra-theme'

const inputs = css`
    input:-internal-autofill-selected {
        background-color: red !important;
    }
    input::placeholder {
        color: ${Theme.colors.darkGrey} !important;
        position: relative;
        top: -3px;
    }

    select,
    input[type='text'] {
        &:disabled {
            background: ${Theme.colors.brand.lightgrey};
            color: #ccc;

            & + div {
                color: #ccc;
            }
        }
    }

    div[type='radio'] {
        background-color: ${Theme.colors.brand.white};
    }

    button:focus {
        box-shadow: none !important;
    }
`

const unorderedList = css`
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
                height: 10px;
                width: 10px;
                margin-right: 10px;
                border-radius: 5px;
                background-color: ${Theme.colors.brand.black};
            }
            ul {
                margin-left: 10px;
            }
        }
    }
`

const carousel = css`
    .carousel {
        ul {
            margin-bottom: 0;
            li {
                padding-left: 0;
                &:before {
                    content: none;
                }
            }
        }
    }

    .carousel .slide,
    .DayPicker {
        text-align: left;
        background: transparent;

        ul {
            margin-bottom: 0;
            li {
                padding-left: 0;
                &:before {
                    content: none;
                }
            }
        }
    }

    .carousel.carousel-slider {
        overflow: visible;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .control-dots {
        display: flex;
        justify-content: center;
    }
`

const sharedHeadingsStyles = css`
    font-family: 'Rooster', sans-serif;
    font-weight: bold;
`

const headings = css`
    h1 {
        ${sharedHeadingsStyles};

        @media (max-width: 478px) {
            font-size: 24px;
            line-height: 30px;
        }

        font-size: 40px;
        font-weight: 500;
        line-height: 48px;
        margin-bottom: 10px;
    }

    h2 {
        ${sharedHeadingsStyles};

        @media (max-width: 478px) {
            font-size: 22px;
            line-height: 28px;
        }

        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
        margin-bottom: 15px;
    }

    h3 {
        ${sharedHeadingsStyles};

        @media (max-width: 478px) {
            font-size: 18px;
            line-height: 24px;
        }

        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
    }

    h4 {
        ${sharedHeadingsStyles};
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
    }

    h5 {
        ${sharedHeadingsStyles};
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
    }

    h6 {
        ${sharedHeadingsStyles};
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }
`

const componentWrapperSpecific = css`
    .component-wrapper {
        p {
            margin-bottom: 15px;
        }

        a {
            text-decoration: underline;
        }

        img {
            align-self: center;
        }

        > div > div {
            > :firtst-of-type {
                margin-top: 0;
            }

            > :last-child {
                margin-bottom: 0px;
            }
        }

        table {
            border-collapse: collapse;

            td,
            th {
                padding: 0.75rem;
                vertical-align: top;
                border-top: 1px solid #dee2e6;
            }
        }
        textarea {
            width: 100%;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            position: relative;
            transition: all 0.2s ease 0s;
            outline: none;
            appearance: none;
            font-size: 14px;
            padding-left: 15px;
            padding-right: 15px;
            height: 45px;
            border-radius: 0px !important;
            border: 1px solid ${Theme.colors.brand.lightgrey};
            background-color: rgb(255, 255, 255);
            padding-top: 10px;
            &:hover,
            &:focus {
                border-color: #5dba23 !important;
            }
        }

        div[type='radio'] {
            background-color: ${Theme.colors.brand.white};
        }
    }
`

const links = css`
    a {
        :hover {
            text-decoration: underline;
            text-decoration-color: inherit;
        }
        :focus {
            box-shadow: none !important;
        }
    }
`

export const globalStyles = css`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Rooster', sans-serif;
    }
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
                height: 10px;
                width: 10px;
                margin-right: 10px;
                background-color: ${Theme.colors.brand.black};
            }
        }
    }
    .sb-show-main {
        background-color: #f2f2f2;
    }
    ${inputs}
    ${unorderedList}
    ${carousel}
    ${headings}
    ${links}
    ${componentWrapperSpecific}
`
