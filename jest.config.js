module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['@peracto-library/test-utils/dist/cjs/setupTests'],
    testEnvironment: 'node',
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!**/*index.ts',
        '!**/__stories/**',
        '!src/pages/**',
        '!src/layouts/**',
    ],
    coverageDirectory: './coverage',
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleNameMapper: {
        '^.+\\.(css|scss|ts|gif|ttf|eot|svg|png)$': 'jest-transform-stub',
        'typeface-(.*)': 'identity-obj-proxy',
    },
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: -100000,
        },
    },
}
