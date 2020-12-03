import { Register } from 'locales/schema'

export const register: Register = {
    title: 'Apply for a new account',
    introText:
        'Join xxxxxxxxx today. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    emailHelperText: '( Email address will be used as username )',
    requiredFields: 'Required fields',
    form: {
        placeholders: {
            firstName: 'First name *',
            lastName: 'Last name *',
            email: 'Email address *',
            telephone: 'Telephone',
            password: 'Password *',
            confirmPassword: 'Confirm Password *',
        },
    },
}
