export type Footer = {
    ecommerceBy: string
    companyInfo: (address: string, regNo: string | number, vatNo: string | number) => string
    sitemap: string
    subscribeBlock: {
        title: string
        content: string
    }
    vatNumber: string
}
