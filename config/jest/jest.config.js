module.exports = {
  rootDir: "../../",
  setupFiles: ["<rootDir>/config/jest/jest-setup.js"],
  testPathIgnorePatterns: [
    "/webpack/",
    "/tmp/",
    "/node_modules/",
    "/app/static/",
    "/dev-server/",
    "/config/",
    "/coverage/"
  ],

  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.js$": "babel-jest"
  }
};
