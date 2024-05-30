module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    // Handle module aliases (if you have set any in your next.config.js)
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
    // Mocking CSS Modules
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": require.resolve("./test/style-mock.js"),
  },
  testEnvironment: "jsdom",
};
