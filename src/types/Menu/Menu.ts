import * as shared from '@peracto-library/shared'
// import { String, Array, Static, Record } from 'runtypes'

// export const Menu = Record({
//     '@context': String,
//     '@id': String,
//     '@type': String,
//     code: String,
//     locale: String,
//     menuItems: Array(MenuItem),
//     name: String,
// })

// export type Menu = Static<typeof Menu>

export type Menu = {
    '@context': string
    '@id': string
    '@type': string
    code: string
    locale: string
    menuItems: shared.types.MenuItem[]
    name: string
}
