const plugin = require('tailwindcss/plugin')

module.exports = {
  disabledFilterPlugins: {
    blur: false,
    brightness: false,
    contrast: false,
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
  contrast: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        contrast: (value) => ({
          filter: `contrast(${value})`
        }),
      },
      { values: theme('contrast') }
    )
  }),
}
