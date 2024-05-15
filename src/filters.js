const plugin = require('tailwindcss/plugin')

module.exports = {
  disabledFilterPlugins: {
    blur: false,
    brightness: false,
  },
  blur: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        blur: (value) => ({
          filter: `blur(${value})`
        }),
      },
      { values: theme('blur', ) }
    )
  }),
  brightness: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        brightness: (value) => ({
          filter: `brightness(${value})`
        }),
      },
      { values: theme('brightness') }
    )
  }),
}
