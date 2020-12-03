import { Login } from 'locales/schema'

export const login: Login = {
    assistanceMessage: (tel, email) => `Call us for assistance on ${tel}, email us at ${email}`,
    forgottenYourPassword: 'Forgotten your password?',
    title: 'Sign in to your account',
    troubleSigningIn: 'Trouble signing in?',
    passwordPlaceholder: 'Password',
    emailPlaceholder: 'Email address',
    errors: {
        invalidCredentials: 'Invalid credentials.',
    },
    guestLoginMessage: 'For receipts & order information only',
}
