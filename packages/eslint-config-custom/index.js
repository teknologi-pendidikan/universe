module.exports = {
  extends: ['next/core-web-vitals', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-console': [
      'error',
      {
        allow: ['error', 'warn'],
      },
    ],
    'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'no-debugger': 'error',
    'no-undef': 'error',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
