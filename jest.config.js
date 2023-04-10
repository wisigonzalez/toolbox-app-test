module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect',
      '<rootDir>/setupTests.js'
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    collectCoverage: false,
    coverageReporters: ['lcov', 'text'],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/public/',
      '*.test.js',
    ],
  };