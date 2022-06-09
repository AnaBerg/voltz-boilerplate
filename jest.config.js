module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorPatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*.stories.@(ts|tsx)', '!src/styles/**/*.ts(x)?', '!src/pages/*.ts(x)?'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}