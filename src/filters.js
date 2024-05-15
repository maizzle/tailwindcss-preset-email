const plugin = require('tailwindcss/plugin')

module.exports = {
  disabledFilterPlugins: {
    blur: false,
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
}
