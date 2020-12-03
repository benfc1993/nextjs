import {
    faTwitter,
    faFacebookF,
    faInstagram,
    faPinterest,
    faYoutube,
    faLinkedin,
    faCcAmazonPay,
    faCcMastercard,
    faCcApplePay,
    faCcPaypal,
    faCcVisa,
    faCcStripe,
} from '@fortawesome/free-brands-svg-icons'

export const socials = [
    { icon: faFacebookF, link: () => console.log('Clicking Facebook link'), altText: `Facebook` },
    { icon: faTwitter, link: () => console.log('Clicking Twitter link'), altText: `Twitter` },
    { icon: faInstagram, link: () => console.log('Clicking Instagram link'), altText: `Instagram` },
    { icon: faPinterest, link: () => console.log('Clicking Pinterest link'), altText: `Pinterest` },
    { icon: faYoutube, link: () => console.log('Clicking YouTube link'), altText: `YouTube` },
    { icon: faLinkedin, link: () => console.log('Clicking LinkedIn link'), altText: `LinkedIn` },
]

export const customSocials = [
    {
        icon: faCcAmazonPay,
        link: () => console.log('Clicking AmazonPay link'),
        altText: `AmazonPay`,
    },
    { icon: faCcApplePay, link: () => console.log('Clicking ApplePay link'), altText: `ApplePay` },
    {
        icon: faCcMastercard,
        link: () => console.log('Clicking Mastercard link'),
        altText: `Mastercard`,
    },
    { icon: faCcPaypal, link: () => console.log('Clicking Paypal link'), altText: `Paypal` },
    { icon: faCcVisa, link: () => console.log('Clicking Visa link'), altText: `Visa` },
    { icon: faCcStripe, link: () => console.log('Clicking Stripe link'), altText: `Stripe` },
]

export const items = [
    {
        itemType: 'branch',
        linkText: 'Lorem Ipsum',
        path: null,
        content: null,
        id: 4,
        filteredChildren: [
            {
                itemType: 'content',
                linkText: 'Id quam',
                path: 'id-quam',
                content: {
                    id: 2,
                    title: 'Id quam',
                },
                id: 8,
                filteredChildren: [],
            },
            {
                itemType: 'content',
                linkText: 'Sollicitudin et',
                path: 'sollicitudin-et',
                content: {
                    id: 2,
                    title: 'Sollicitudin et',
                },
                id: 8,
                filteredChildren: [],
            },
            {
                itemType: 'content',
                linkText: 'Imperdiet metus',
                path: 'imperdiet-metus',
                content: {
                    id: 2,
                    title: 'Imperdiet metus',
                },
                id: 8,
                filteredChildren: [],
            },
            {
                itemType: 'content',
                linkText: 'Aliquam habitant',
                path: 'aliquam-habitant',
                content: {
                    id: 2,
                    title: 'Aliquam habitant',
                },
                id: 8,
                filteredChildren: [],
            },
        ],
    },
    {
        itemType: 'branch',
        linkText: 'Commodo pretium integer',
        path: null,
        content: null,
        id: 6,
        filteredChildren: [
            {
                itemType: 'content',
                linkText: 'Curae nec',
                path: 'curae-nec',
                content: {
                    id: 3,
                    title: 'Curae nec',
                },
                id: 9,
                filteredChildren: [],
            },
            {
                itemType: 'content',
                linkText: 'Sagittis orci',
                path: 'sagittis-orci',
                content: {
                    id: 3,
                    title: 'Sagittis orci',
                },
                id: 9,
                filteredChildren: [],
            },
            {
                itemType: 'content',
                linkText: 'Fringilla dictum',
                path: 'fringilla-dictum',
                content: {
                    id: 3,
                    title: 'Fringilla dictum',
                },
                id: 9,
                filteredChildren: [],
            },
            {
                itemType: 'content',
                linkText: 'Varius sit',
                path: 'varius-sit',
                content: {
                    id: 3,
                    title: 'Varius sit',
                },
                id: 9,
                filteredChildren: [],
            },
        ],
    },
    {
        itemType: 'branch',
        linkText: 'Porttitor faucibus venenatis',
        path: null,
        content: null,
        id: 7,
        filteredChildren: [
            {
                itemType: 'directLink',
                linkText: 'Primis fringilla',
                path: 'https://carbon.peracto3.pub/login',
                content: null,
                id: 10,
                filteredChildren: [],
            },
            {
                itemType: 'directLink',
                linkText: 'Enim leo',
                path: 'https://carbon.peracto3.pub/login',
                content: null,
                id: 10,
                filteredChildren: [],
            },
            {
                itemType: 'directLink',
                linkText: 'Odio imperdiet',
                path: 'https://carbon.peracto3.pub/login',
                content: null,
                id: 10,
                filteredChildren: [],
            },
            {
                itemType: 'directLink',
                linkText: 'Senectus pulvinar',
                path: 'https://carbon.peracto3.pub/login',
                content: null,
                id: 10,
                filteredChildren: [],
            },
        ],
    },
]
