import { Array, Boolean, Literal, Null, Number, Partial, Record, Static, String } from 'runtypes'

export const Address = Record({
    '@id': String,
    '@type': Literal('Address'),
    id: Number,
    type: Array(String),
    firstName: String.Or(Null),
    lastName: String.Or(Null),
    addressLine1: String.Or(Null),
    addressLine2: String.Or(Null),
    addressLine3: String.Or(Null),
    addressLine4: String.Or(Null),
    city: String.Or(Null),
    county: String.Or(Null),
    country: String.Or(Null),
    postcode: String.Or(Null),
    defaults: Array(
        Record({
            type: String,
        }),
    ),
    description: String.Or(Null),
    title: String.Or(Null),
}).And(
    Partial({
        user: String.Or(Null),
        isDefault: Boolean,
        isReadOnly: Boolean,
    }),
)

export type Address = Static<typeof Address>

export type UserAddressType = 'trading' | 'residential' | 'registered' | 'delivery' | ''
