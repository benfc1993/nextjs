import * as schema from './schema'
import en from './en'
import de from './de'

export const languages: { [key: string]: language } = {
    en,
    de,
}

export type languages = 'en' | 'de'

export type language = {
    account: schema.Account
    common: schema.Common
    footer: schema.Footer
    header: schema.Header
    login: schema.Login
    register: schema.Register
    search: schema.Search
}

export { schema }
