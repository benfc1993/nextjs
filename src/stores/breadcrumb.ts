import { observable, action } from 'mobx'
import { Breadcrumb } from '../types'

export class BreadcrumbStore {
    @observable
    items = [] as Breadcrumb[]

    @action
    setItems(data: Breadcrumb[]) {
        this.items = data
    }
}
