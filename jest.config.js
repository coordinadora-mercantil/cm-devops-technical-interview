const { resolve } = require('path');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.steps.ts', '**/*.test.ts'],
    collectCoverageFrom: ['src/**/*.ts'],
};
