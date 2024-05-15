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
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
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
  backdropBlur: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        'backdrop-blur': (value) => ({
          backdropFilter: `blur(${value})`
        }),
      },
      { values: theme('backdropBlur') }
    )
  }),
  backdropBrightness: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        'backdrop-brightness': (value) => ({
          backdropFilter: `brightness(${value})`
        }),
      },
      { values: theme('backdropBrightness') }
    )
  }),
  backdropContrast: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        'backdrop-contrast': (value) => ({
          backdropFilter: `contrast(${value})`
        }),
      },
      { values: theme('backdropContrast') }
    )
  }),
  backdropGrayscale: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        'backdrop-grayscale': (value) => ({
          backdropFilter: `grayscale(${value})`
        }),
      },
      { values: theme('backdropGrayscale') }
    )
  }),
  backdropHueRotate: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        'backdrop-hue-rotate': (value) => ({
          backdropFilter: `hue-rotate(${value})`
        }),
      },
      { values: theme('backdropHueRotate'), supportsNegativeValues: true }
    )
  }),
  backdropInvert: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        'backdrop-invert': (value) => ({
          backdropFilter: `invert(${value})`
        }),
      },
      { values: theme('backdropInvert') }
    )
  }),
  backdropOpacity: plugin(function({ matchUtilities, theme }) {
    matchUtilities(
      {
        'backdrop-opacity': (value) => ({
          backdropFilter: `opacity(${value})`
        }),
      },
      { values: theme('backdropOpacity') }
    )
  }),
}
