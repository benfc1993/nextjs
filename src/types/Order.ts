export type Order = {
    '@id': string
    '@type': string
    paymentMethod: string | null
    lines: [
        {
            product: {
                '@id': string
                '@type': string
                id: number
            }
            item: {
                name: string
                sku: string
                slug: string
                image: string
            }
            prices: {
                price: {
                    incTax: number
                    excTax: number
                }
            }
            quantity: number
            unitPrice: {
                incTax: number
                excTax: number
            }
            linePrice: {
                incTax: number
                excTax: number
            }
            linePriceTotal: {
                incTax: number
                excTax: number
            }
            promotions: [
                {
                    promotionName: string
                    promotionCode: string | null
                    promotionType: string
                    discount: {
                        incTax: number
                        excTax: number
                    }
                },
            ]
        },
    ]
    placedBy: {
        '@id': string
        '@type': string
        id: number
    }
    reference: string
    email: string
    status: string
    collectionLocation: {
        '@id': string
        '@type': string
    } | null
    collectionOption: string | null
    collectionNotes: string | null
    totalIncTaxBeforeDiscount: number
    totalExcTaxBeforeDiscount: number
    totalTaxBeforeDiscount: number
    totalIncTaxAfterDiscount: number
    totalExcTaxAfterDiscount: number
    totalTaxAfterDiscount: number
    totalDiscount: number
    promotions: [
        {
            promotionName: string
            promotionCode: string | null
            promotionType: string
            discount: {
                incTax: number
                excTax: number
            }
        },
    ]
    shippingDate: string
    shippingTotal: number
    shippingTotalBeforeDiscount: number
    shippingTotalAfterDiscount: number
    deliveryNotes: string
    deliveryMethod: string
    billingAddress: {
        title: string
        forename: string
        surname: string
        line1: string
        line2: string
        line3: string
        line4: string
        city: string
        county: string
        country: string
        postalCode: string
        telephone: string
    }
    deliveryAddress: {
        title: string
        forename: string
        surname: string
        line1: string
        line2: string
        line3: string
        line4: string
        city: string
        county: string
        country: string
        postalCode: string
        telephone: string
    }
    id: number
    customerReference: string
    currency: string
    createdAt: string
    modifiedAt: string
    user: {
        '@id': string
        '@type': string
        id: number
    }
}
