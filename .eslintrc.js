const { globals } = require('./eslint.globals.cjs');

module.exports = {
    globals,
    root: true,
    env: {
        node: true,
        es6: true,
        es2022: true,
        // 必须设置这一行, 否则会提示编译宏未定义的错误!
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },
    plugins: ['prettier', '@typescript-eslint', 'vue'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                bracketSpacing: true,
                bracketSameLine: false,
                singleAttributePerLine: true,
                vueIndentScriptAndStyle: false,
                printWidth: 120,
                quoteProps: 'as-needed',
                trailingComma: 'es5',
                arrowParens: 'avoid',
                proseWrap: 'never',
                endOfLine: 'auto',
            },
            {
                usePrettierrc: true,
            },
        ],
        'vue/multi-word-component-names': 'off',
    },
};
