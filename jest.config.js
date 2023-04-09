module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./src/setupTests.js'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/public/"
      ],
  };
  