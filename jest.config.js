module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    setupFilesAfterEnv: [jest.setTimeout(30000)]
  }