export default {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__test__/.*|/tests/.*|(\\.|/)(test|spec))\\.[tj]sx?$',
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/', '/coverage/', '/tests/TestClasses/', '/tests/TestData/'],
    moduleFileExtensions: ['ts', 'js', 'jsx', 'json'],
    coverageDirectory: './coverage',
    coverageReporters: ['html-spa', 'text'],
    collectCoverageFrom: [
        'src/*.js',
        'src/**/*.js',
        '!**/build/**',
        '!**/dist/**',
        "!**/node_modules/**",
        '!**/tests/**',
        "!**/vendor/**",
    ],
};

