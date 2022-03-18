module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        babelOptions: {
            configFile: './babel.config.json',
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        'linebreak-style': 'off',
        'comma-dangle': 'off',
        'indent': 'off',
        'require-jsdoc': 0,
        'no-trailing-spaces': 'off',
        'operator-linebreak': 'off',
    }
};
