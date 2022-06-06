module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorPatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*.stories.@(ts|tsx)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}