module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      preset: "ts-jest",
      tsConfig: "tsconfig.json",
    },
  },
  testMatch: ["**/*.spec.(ts|tsx|js)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|css)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["node_modules/(?!(preact)/)"],
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
        outputPath: "documentation/test-report.html",
      },
    ],
  ],
  collectCoverage: true,
};
