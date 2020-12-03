import { Login } from 'locales/schema'

export const login: Login = {
    assistanceMessage: (tel, email) =>
        `Rufen Sie uns an, um Hilfe zu erhalten ${tel}, mailen Sie uns an ${email}`,
    forgottenYourPassword: 'Passwort vergessen?',
    title: 'Melden Sie sich bei Ihrem Konto an',
    troubleSigningIn: 'Probleme bei der Anmeldung?',
    passwordPlaceholder: 'Passwort',
    emailPlaceholder: 'E-Mail-Addresse',
    errors: {
        invalidCredentials: 'Ungültige Anmeldeinformationen.',
    },
    guestLoginMessage: 'Nur für Quittungen und Bestellinformationen',
}
