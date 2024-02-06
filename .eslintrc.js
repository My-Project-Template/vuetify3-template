const { globals } = require('./eslint.globals.cjs');

module.exports = {
    globals,
    root: true,
    env: {
        node: true,
        es6: true,
        es2023: true,
        // This key must be true, or when using defineProps
        // without import at <script setup></script>,
        // the code will be taken as a mistake
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
        ecmaVersion: 2023,
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
        indent: ['error', 4, { SwitchCase: 1 }],
        'prettier/prettier': [
            'error',
            {},
            {
                usePrettierrc: true,
            },
        ],
        'vue/multi-word-component-names': 'off',
    },
};
