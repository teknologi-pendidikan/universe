// tailwind config is required for editor support

const sharedConfig = require('@edtechid/tailwind-config/tailwind.config.js')

module.exports = {
  presets: [sharedConfig],
  plugins: [require('@tailwindcss/typography')],
}
