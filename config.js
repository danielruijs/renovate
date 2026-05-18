module.exports = {
    platform: 'github',
    endpoint: 'https://api.github.com',
    onboardingConfig: {
        extends: [
            'config:recommended',
            'group:all'
        ],
    },
    repositories: ['danielruijs/go-chess'],
};