module.exports = function () {
    return {
        files: [
            "src/**/*.js",
            "!src/**/*spec.js"
        ],

        tests: [
            'src/**/*spec.js'
        ],

        env: {
            type: 'node'
        },

        testFramework: 'jest'
    };
};