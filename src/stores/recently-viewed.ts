import * as shared from '@peracto-library/shared'
import { observable, action, computed } from 'mobx'
import { RecentlyViewedItems } from '../types'
import * as ls from 'local-storage'

export class RecentlyViewedStore {
    @observable
    items: RecentlyViewedItems = ls.get('recently_viewed_items') ?? []
    storage_key = 'recently_viewed_items'
    expire_duration = 7 // days

    @computed get unexpiredItems() {
        const now = new Date()
        return this.items.filter((i) => {
            // return all items with an expiry date greater than now
            return i.expiryDate > now.toString()
        })
    }

    @action setItems(data: RecentlyViewedItems) {
        this.items = data
        this.setStorage()
    }

    @action addItem(product: shared.types.Product) {
        if (this.items.some((i) => i.product.id === product.id)) {
            this.deleteItem(product.id)
        }
        this.prependItem(product)
    }

    @action prependItem(product: shared.types.Product) {
        // Create a date object which sets the expiry duration
        const expiryDate = new Date()
        expiryDate.setDate(expiryDate.getDate() + this.expire_duration)

        this.items = [{ product, expiryDate: expiryDate.toString() }, ...this.items]
        this.setStorage()
    }

    @action deleteItem(id: number) {
        this.items = this.items.filter((i) => i.product.id !== id)
        this.setStorage()
    }

    @action setStorage() {
        ls.set(this.storage_key, this.items)
    }
}
