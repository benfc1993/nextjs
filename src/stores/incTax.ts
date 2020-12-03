import { observable, action, computed } from 'mobx'
import * as ls from 'local-storage'

export class IncTaxStore {
    @observable
    incTax = true

    @action
    setValue(value: boolean) {
        this.incTax = value

        ls.set('incTax', this.incTax)
    }

    @action
    toggle() {
        this.incTax = !this.incTax

        ls.set('incTax', this.incTax)
    }

    @computed
    get including() {
        return this.incTax === true
    }

    @computed
    get excluding() {
        return this.incTax === false
    }
}
