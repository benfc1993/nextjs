import { observable, action, computed } from 'mobx'
import * as shared from '@peracto-library/shared'

export class BasketStore {
    @observable basket = {} as shared.types.Basket | null

    @action
    setBasket(data: shared.types.Basket | null) {
        this.basket = data
    }

    @computed
    get basketCount() {
        return this.basket?.lines?.reduce((acc, cur) => cur.quantity + acc, 0) || 0
    }
}
