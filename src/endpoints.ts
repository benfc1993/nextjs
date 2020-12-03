export const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://stage-api.peracto3.pub'

export default {
    baseUrl: baseUrl,
    menus: {
        header: `${baseUrl}/menus/main_menu`,
        footer: `${baseUrl}/menus/footer`,
    },
    menuItems: {
        get: (id: number) => `${baseUrl}/menu-items/${id}`,
    },
    forms: `${baseUrl}/forms`,
    formSubmissions: `${baseUrl}/form-submissions`,
    user: {
        get: (id: number) => `${baseUrl}/users/${id}`,
        update: (id: number) => `${baseUrl}/users/${id}`,
        resetPassword: `${baseUrl}/users/reset-password`,
    },
    product: (slug: string) => `${baseUrl}/products/slug/${slug}`,
    productRelations: (sku: string) => `${baseUrl}/product-relations/sku/${sku}`,
    contentElement: (element: string) => `${baseUrl}/content-elements/${element}`,
    contentElements: {
        homepage: `${baseUrl}/content-elements/homepage`,
        account: {},
        login: {
            registrationText: `${baseUrl}/content-elements/registration_text`,
        },
    },
    contentPages: {
        get: (slug: string) => `${baseUrl}/menu-items-by-path/${slug}`,
    },
    categories: {
        get: (slug: string) => `${baseUrl}/menu-items-by-path/${slug}`,
    },
    articleCategories: {
        get: (id: number) => `${baseUrl}/articles-by-category/${id}`,
        getArticle: (slug: string) => `${baseUrl}/content-by-slug/${slug}`,
    },
    wishlists: {
        add: `${baseUrl}/wishlists`,
        delete: (id: number) => `${baseUrl}/wishlists/${id}`,
        get: (id: number) => `${baseUrl}/wishlists/${id}`,
        getList: (largeList?: boolean) =>
            `${baseUrl}/wishlists${largeList ? '?itemsPerPage=1000&order[modifiedAt]=desc' : ''}`,
        update: (id: number) => `${baseUrl}/wishlists/${id}`,
    },
    wishlistItems: {
        delete: (id: number) => `${baseUrl}/wishlist-items/${id}`,
        update: (id: number) => `${baseUrl}/wishlist-items/${id}`,
    },
    orders: {
        get: (id: number) => `${baseUrl}/orders/${id}`,
        getList: `${baseUrl}/users-orders`,
        update: (id: number) => `${baseUrl}/orders/${id}`,
    },
    addresses: {
        add: `${baseUrl}/addresses`,
        delete: (id: number) => `${baseUrl}/addresses/${id}`,
        get: (id: number) => `${baseUrl}/addresses/${id}`,
        getByUser: () => `${baseUrl}/users-addresses`,
        update: (id: number) => `${baseUrl}/addresses/${id}`,
    },
    baskets: {
        add: `${baseUrl}/baskets`,
        get: (id: string) => `${baseUrl}/baskets/${id}`,
        update: (id: string) => `${baseUrl}/baskets/${id}`,
        delete: (id: string) => `${baseUrl}/baskets/${id}`,
        confirm: (id: string) => `${baseUrl}/baskets/${id}/confirm`,
        convert: (id: string) => `${baseUrl}/baskets/${id}/convert`,
        getShippingServices: (id: string, filter: string) =>
            `${baseUrl}/baskets/${id}/shipping-services?status=active&itemsPerPage=1000${filter}`,
        addPromotionCodesToBasket: (basketId: string) =>
            `${baseUrl}/baskets/${basketId}/promotion-codes`,
    },
    users: {
        get: (id: number) => `${baseUrl}/users/${id}`,
        update: (id: number) => `${baseUrl}/users/${id}`,
    },
    paymentTransactions: {
        add: `${baseUrl}/payment-transactions`,
        update: (id: number) => `${baseUrl}/payment-transactions/${id}`,
    },
    locations: {
        getList: (type?: string) =>
            `${baseUrl}/locations?itemsPerPage=1000&locationPageStatus=active${
                type ? `&locationTypes.type=${type}` : ''
            }`,
        get: (id: number) => `${baseUrl}/locations/${id}`,
        getBySlug: (slug: string) => `${baseUrl}/locations/slug/${slug}`,
    },
    countries: {
        get: (validForBilling: boolean, validForDelivery: boolean) =>
            `${baseUrl}/countries?${validForBilling ? 'validForBilling=true' : ''}${
                validForBilling && validForDelivery ? '&' : ''
            }${validForDelivery ? 'validForDelivery=true' : ''}`,
    },
}
