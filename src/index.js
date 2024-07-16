const plugin = require('tailwindcss/plugin')
const { disabledFilterPlugins, ...filterPlugins } = require('./filters')

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  theme: {
    screens: {
      sm: {max: '600px'},
      xs: {max: '425px'},
    },
    extend: {
      spacing: {
        screen: '100vw',
        full: '100%',
        0: '0',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        4.5: '18px',
        5: '20px',
        5.5: '22px',
        6: '24px',
        6.5: '26px',
        7: '28px',
        7.5: '30px',
        8: '32px',
        8.5: '34px',
        9: '36px',
        9.5: '38px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        18: '72px',
        20: '80px',
        22: '88px',
        24: '96px',
        26: '104px',
        28: '112px',
        30: '120px',
        32: '128px',
        34: '136px',
        36: '144px',
        38: '152px',
        40: '160px',
        42: '168px',
        44: '176px',
        46: '184px',
        48: '192px',
        50: '200px',
        52: '208px',
        54: '216px',
        56: '224px',
        58: '232px',
        60: '240px',
        62: '248px',
        64: '256px',
        66: '264px',
        68: '272px',
        70: '280px',
        72: '288px',
        74: '296px',
        76: '304px',
        78: '312px',
        80: '320px',
        82: '328px',
        84: '336px',
        86: '344px',
        88: '352px',
        90: '360px',
        92: '368px',
        94: '376px',
        96: '384px',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      dropShadow: {
        sm: '0 1px 1px rgba(0, 0, 0, 0.05)',
        DEFAULT: [
          '0 1px 2px rgba(0, 0, 0, 0.1)',
          '0 1px 1px rgba(0, 0, 0, 0.06)',
        ],
        md: [
          '0 4px 3px rgba(0, 0, 0, 0.07)',
          '0 2px 2px rgba(0, 0, 0, 0.06)',
        ],
        lg: [
          '0 10px 8px rgba(0, 0, 0, 0.04)',
          '0 4px 3px rgba(0, 0, 0, 0.1)',
        ],
        xl: [
          '0 20px 13px rgba(0, 0, 0, 0.03)',
          '0 8px 5px rgba(0, 0, 0, 0.08)',
        ],
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
        none: '0 0 #000',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        0: '0',
        xxs: '11px',
        xs: '12px',
        '2xs': '13px',
        sm: '14px',
        '2sm': '15px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
        '8xl': '96px',
        '9xl': '128px',
      },
      letterSpacing: theme => ({
        ...theme('width'),
      }),
      lineHeight: theme => ({
        ...theme('width'),
      }),
      maxWidth: theme => ({
        ...theme('width'),
        xs: '160px',
        sm: '192px',
        md: '224px',
        lg: '256px',
        xl: '288px',
        '2xl': '336px',
        '3xl': '384px',
        '4xl': '448px',
        '5xl': '512px',
        '6xl': '576px',
        '7xl': '640px',
      }),
      minHeight: theme => ({
        ...theme('width'),
      }),
      minWidth: theme => ({
        ...theme('width'),
      }),
    },
  },
  // We disable all core plugins that we redefine
  corePlugins: {
    preflight: false,
    backgroundOpacity: false,
    borderOpacity: false,
    borderSpacing: false,
    boxShadow: false,
    boxShadowColor: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
    textDecoration: false,
    ...disabledFilterPlugins,
  },
  plugins: [
    plugin(function({ matchUtilities, addUtilities, theme }) {
      // Border-spacing utilities
      matchUtilities(
        {
          'border-spacing': (value) => ({
            'border-spacing': value,
          }),
          'border-spacing-y': (value) => ({
            'border-spacing': `0 ${value}`,
          }),
          'border-spacing-x': (value) => ({
            'border-spacing': `${value} 0`,
          }),
        },
        { values: theme('borderSpacing', ) }
      )

      // Box-shadow utilities
      matchUtilities(
        {
          shadow: value => ({
            boxShadow: value
          }),
        },
        {
          values: theme('boxShadow')
        }
      )

      // Text decoration utilities
      addUtilities({
        '.underline': { 'text-decoration': 'underline' },
        '.overline': { 'text-decoration': 'overline' },
        '.line-through': { 'text-decoration': 'line-through' },
        '.no-underline': { 'text-decoration': 'none' },
      })
    }),
    // Filters
    ...Object.values(filterPlugins),
    // MSO utilities
    require('tailwindcss-mso'),
    // Email client targeting variants
    require('tailwindcss-email-variants'),
  ],
}
