module.exports = {
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/node_modules/jest-svg-transformer"
    },
};