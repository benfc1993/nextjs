import { Footer } from 'locales/schema'

export const footer: Footer = {
    ecommerceBy: 'E-Commerce durch',
    companyInfo: (address, regNo, vatNo) => {
        return `Hauptbüro: ${address}. Handelsregisternummer ${regNo}. Umsatzsteuer-Identifikationsnummer ${vatNo}`
    },
    sitemap: 'Seitenverzeichnis',
    subscribeBlock: {
        title: 'Erhalten Sie Angebote in Ihrem Posteingang',
        content:
            'Wir würden uns freuen, Sie per E-Mail über die neuesten Nachrichten und Angebote auf dem Laufenden zu halten.',
    },
    vatNumber: 'Umsatzsteuer-Identifikationsnummer',
}
