import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    tseslint.configs.recommendedTypeChecked,
    stylistic.configs.customize({
        indent: 4,
        semi: true,
    }),
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: {
            globals: globals.node,
            parserOptions: {
                projectService: true,
            },
        },
        linterOptions: {
            reportUnusedInlineConfigs: 'error',
            reportUnusedDisableDirectives: 'error',
        },
        rules: {
            'require-atomic-updates': 'error',
            'default-case-last': 'error',
            'eqeqeq': 'error',
            'max-depth': 'error',
            'no-lone-blocks': 'error',
            'no-multi-str': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-promise-reject-errors': 'error',
            'yoda': 'error',
        },
    },
]);
