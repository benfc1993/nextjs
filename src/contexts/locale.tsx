import React, { Dispatch, SetStateAction, useState } from 'react'

import { language, languages } from 'locales'

import * as ls from 'local-storage'

export type localeContextType = {
    t: language
    lang: languages | null
    setLocale: Dispatch<SetStateAction<languages>>
}

export const localeContext = React.createContext<localeContextType | null>(null)

export const LocaleProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [locale, setLocale] = useState<languages>(ls.get('currentLanguage') ?? 'en')

    return (
        <localeContext.Provider value={{ t: languages[locale], lang: locale, setLocale }}>
            {children}
        </localeContext.Provider>
    )
}
