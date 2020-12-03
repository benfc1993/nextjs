import { languages } from 'locales'
import { action, observable } from 'mobx'

export class ConfigStore {
    @observable
    email = 'test@example.com'
    telephone = '01329 226501'
    companyAddress = 'Lorem ipsum dolor sit amet, consmollit anim id est laborum'
    companyName = 'Peracto'
    companyVatNumber = '843 1857 18'
    companyRegistrationNumber = '02699111'
    baseMetaTitle = 'Peracto'
    defaultMetaDescription = 'Peracto description'
    locale = 'en'

    @action
    setLocale(lang: languages) {
        this.locale = lang
        console.log('new locale: ', this.locale)
    }
}
