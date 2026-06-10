// ISSUE-1: hardcoded API key — should be loaded from process.env
const config = {
  port: 3000,
  apiKey: "sk-prod-9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d",
  dbUrl: "mongodb://localhost:27017/myapp",
};

module.exports = config;
