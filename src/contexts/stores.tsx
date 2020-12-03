import React from 'react'
import {
    BasketStore,
    BreadcrumbStore,
    ConfigStore,
    IncTaxStore,
    RecentlyViewedStore,
} from '../stores'

export const storesContext = React.createContext({
    basketStore: new BasketStore(),
    breadcrumbStore: new BreadcrumbStore(),
    configStore: new ConfigStore(),
    incTaxStore: new IncTaxStore(),
    recentlyViewedStore: new RecentlyViewedStore(),
})
