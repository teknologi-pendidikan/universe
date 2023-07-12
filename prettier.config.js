// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Options} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  arrowParens: 'always',
  endOfLine: 'lf',
}
