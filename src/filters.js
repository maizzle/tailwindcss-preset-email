const plugin = require('tailwindcss/plugin')

module.exports = {
  disabledFilterPlugins: {
    blur: false,
    brightness: false,
    contrast: false,
    dropShadow: false,
    grayscale: false,
    hueRotate: false,
    invert: false,
    saturate: false,
    sepia: false,
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
  dropShadow: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        'drop-shadow': (value) => ({
          filter: Array.isArray(value)
            ? value.map((v) => `drop-shadow(${v})`).join(' ')
            : `drop-shadow(${value})`
        }),
      },
      { values: theme('dropShadow') }
    )
  }),
  grayscale: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        grayscale: (value) => ({
          filter: `grayscale(${value})`
        }),
      },
      { values: theme('grayscale') }
    )
  }),
  hueRotate: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        'hue-rotate': (value) => ({
          filter: `hue-rotate(${value})`
        }),
      },
      { values: theme('hueRotate'), supportsNegativeValues: true }
    )
  }),
  invert: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        invert: (value) => ({
          filter: `invert(${value})`
        }),
      },
      { values: theme('invert') }
    )
  }),
  saturate: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        saturate: (value) => ({
          filter: `saturate(${value})`
        }),
      },
      { values: theme('saturate') }
    )
  }),
  sepia: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        sepia: (value) => ({
          filter: `sepia(${value})`
        }),
      },
      { values: theme('sepia') }
    )
  }),
}
