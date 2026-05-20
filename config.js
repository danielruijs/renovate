module.exports = {
  platform: "github",
  endpoint: "https://api.github.com",
  minimumReleaseAge: "7 days",
  onboardingConfig: {
    extends: ["config:recommended", "group:all"],
    minimumReleaseAge: "7 days",
  },
  repositories: ["danielruijs/go-chess"],
};
