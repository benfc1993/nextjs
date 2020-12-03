export type Register = {
    title: string
    introText: string
    emailHelperText: string
    requiredFields: string
    form: {
        placeholders: {
            firstName: string
            lastName: string
            email: string
            telephone: string
            password: string
            confirmPassword: string
        }
    }
}
