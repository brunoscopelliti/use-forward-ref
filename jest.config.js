module.exports = {
  collectCoverageFrom: [
    "<rootDir>/package/src/*.js",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: [
    "html",
    "json",
  ],
  coverageThreshold: {
    global: {
      lines: 95,
    },
  },
  moduleDirectories: [
    "node_modules",
    "<rootDir>/package/src",
  ],
  setupFiles: [
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/**/*.test.js",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  verbose: true,
};
