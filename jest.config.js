module.exports = {
    setupFiles: ['./tests/setup/setEnvironment.js'],
    transform: {
        '^.+\\.ts?$': 'babel-jest',
    },
    moduleNameMapper: {
        // Jest needs to know about module aliasing as it doesn't run after webpack magic
        '^@src/(.*)$': '<rootDir>/src/$1',
        '^@functions/(.*)$': '<rootDir>/src/functions/$1',
        '^@tests/(.*)$': '<rootDir>/tests/$1',
        '^@libs/(.*)$': '<rootDir>/src/libs/$1',
    },
};