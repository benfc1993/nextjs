export type Login = {
    assistanceMessage: (email: string, tel: string) => string
    forgottenYourPassword: string
    title: string
    troubleSigningIn: string
    passwordPlaceholder: string
    emailPlaceholder: string
    errors: {
        invalidCredentials: string
    }
    guestLoginMessage?: string
}
