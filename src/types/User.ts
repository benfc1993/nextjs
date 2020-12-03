export type UserProfile = {
    first_name?: string
    last_name?: string
    username?: string
    customer_group?: string | null
    id?: number
}

export type User = {
    '@context'?: string
    '@id'?: string
    '@type'?: string
    email?: string
    roles?: string[]
    type?: string | null
    firstName?: string | null
    lastName?: string | null
    telephone?: string | null
    passwordRequestedAt?: string | null
    lastLoggedInAt?: string | null
    id?: number
    locked?: boolean
    enabled?: boolean
    title?: string | null
    createdAt?: string | null
    modifiedAt?: string | null
    customerGroup?: string | null
    username?: string | null
}
