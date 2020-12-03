import * as shared from '@peracto-library/shared'

export type RecentlyViewedItem = { product: shared.types.Product; expiryDate: string }
export type RecentlyViewedItems = RecentlyViewedItem[]
