// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Options} */
module.exports = {
    ...require('../..prettier.config.js'),
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindConfig: './tailwind.config.js',
};
