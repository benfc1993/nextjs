import { Footer } from 'locales/schema'

export const footer: Footer = {
    ecommerceBy: 'ecommerce by',
    companyInfo: (address, regNo, vatNo) =>
        `Registered Office: ${address}. Company Registration No. ${regNo}. VAT No. ${vatNo}`,
    sitemap: 'Sitemap',
    subscribeBlock: {
        title: 'Get offers in your inbox',
        content: "We'd love to keep you updated on the latest news and offers by email.",
    },
    vatNumber: 'VAT No.',
}
