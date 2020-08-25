module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
};