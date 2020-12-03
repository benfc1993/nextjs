export type TNestedFormField = {
    '@id': string
    '@type': string
    content?: any[]
    defaultValue?: string
    helpText: string
    inputOptions?: any[]
    inputType: string
    isSuperseded: boolean
    label: string
    thirdPartyFieldId?: number
}

export type TFormField = {
    '@id': string
    '@type': string
    displayOrder: number
    formField: TNestedFormField
    isMandatory: boolean
}

export type TForm = {
    '@context': string
    '@id': string
    '@type': string
    adminEmailContent?: null
    adminEmailRcpt?: null
    adminEmailSubject?: null
    formFields: TFormField[]
    id: number
    label: string
    redirectUrl: string
    sendAdminEmail: boolean
    sendUserEmail: boolean
    submitButtonText: string
    thirdPartyFormId?: string
    userEmailContent?: string
    userEmailField?: string
    userEmailSubject?: string
}
