import { Record, Static, String, Number, Null, Array } from 'runtypes'

// Runtime record for runtime validation of data
export const BranchRecord = Record({
    id: Number,
    name: String,
    '@id': String.Or(Null),
    '@type': String.Or(Null),
    k8BranchId: String.Or(Null),
    type: String.Or(Null),
    alias: String.Or(Null),
    website: String.Or(Null),
    telephone: String.Or(Null),
    address1: String.Or(Null),
    address2: String.Or(Null),
    address3: String.Or(Null),
    county: String.Or(Null),
    postcode: String.Or(Null),
    country: String.Or(Null),
    latitude: String.Or(Null),
    longitude: String.Or(Null),
    openingHours: String.Or(Null),
    specialOpeningHours: String.Or(Null),
    generalInformation: String.Or(Null),
    locationPageStatus: String.Or(Null),
    locationStatus: String.Or(Null),
    locationImages: Array(
        Record({
            type: String.Or(Null),
            imageUrl: String.Or(Null),
            altText: String.Or(Null),
            description: String.Or(Null),
            sortOrder: Number.Or(Null),
        }),
    ).Or(Null),
    email: String.Or(Null),
    createdAt: String.Or(Null),
    modifiedAt: String.Or(Null),
    slug: String.Or(Null),
})

// Convert `BranchRecord` to TS type so that we can validate at compile time when we come to using the data
export type Branch = Static<typeof BranchRecord>
