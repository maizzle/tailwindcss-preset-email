<div align="center">
  <img src="./.github/tailwindcss-mark.svg" alt="Tailwind CSS" width="108" height="66">
  <h1>Tailwind CSS Email Preset</h1>
  <p>Tailwind CSS config preset for HTML emails</p>
</div>

## About

This is a Tailwind CSS config preset that changes some utility classes to use values that are better supported in email clients. It also includes plugins that generate utility classes that are useful for building HTML emails.

## Installation

```bash
npm install tailwindcss-preset-email
```

## Usage

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('tailwindcss-email-preset'),
  ],
}
```

### Customization

You may override the preset by configuring Tailwind as you'd normally do.

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('tailwindcss-email-preset'),
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
    },
  },
}
```

### Configuration

The plugin is basically a custom Tailwind CSS config that changes utility classes to use values that are better supported in email clients, either right in the config or by using plugins.

Following is a list of the changes made to the default Tailwind CSS config.

### screens

The `screens` config uses a desktop-first approach now:

```js
{
  sm: {max: '600px'},
  xs: {max: '425px'},
}
```

### spacing

The `spacing` scale has been updated to use `px` values instead of `rem`.

```js
spacing: {
  screen: '100vw',
  full: '100%',
  0: '0',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  // ...
}
```

### borderRadius

The `borderRadius` scale has been updated to use `px` values instead of `rem`.

```js
borderRadius: {
  none: '0px',
  sm: '2px',
  DEFAULT: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
}
```

### boxShadow

`boxShadow` now uses the exact values from your config.

This is done with the help of the [`tailwindcss-box-shadow`](https://github.com/maizzle/tailwindcss-box-shadow) plugin.

```js
boxShadow: {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
}
```

### dropShadow

Although not that much used in HTML email, the `dropShadow` utilities are now generated using the exact values from your config.

It defaults to this:

```js
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
}
```

### fontFamily

`fontFamily` font stacks have been simplified to use web-safe fonts only.

```js
fontFamily: {
  sans: ['ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
  serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
  mono: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'],
}
```

### fontSize

`fontSize` values have been updated to use `px` values instead of `rem`.

```js
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
}
```

### letterSpacing

`letterSpacing` values have been updated to use values from your `width` scale.

```js
letterSpacing: theme => ({
  ...theme('width'),
})
```

### lineHeight

Likewise, `lineHeight` values have been updated to use values from your `width` scale.

```js
lineHeight: theme => ({
  ...theme('width'),
})
```

### maxWidth

`maxWidth` values have been updated to use `px` values instead of `rem`, and now also use values from your `width` scale.

```js
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
})
```

### minHeight

`minHeight` values have been updated to use values from your `width` scale.

```js
minHeight: theme => ({
  ...theme('width'),
})
```

### minWidth

`minWidth` values have been updated to use values from your `width` scale.

```js
minWidth: theme => ({
  ...theme('width'),
})
```

## Plugins

The preset includes the following plugins:

### tailwindcss-mso

Used for generating classes that are only supported by Microsoft Outlook's Word rendering engine, for Outlook on Windows (versions 2007 and up).

Documentation: https://github.com/maizzle/tailwindcss-mso

### tailwindcss-box-shadow

Used for generating `box-shadow` utilities that use the exact values from your config. In contrast, the defaults in Tailwind CSS use CSS variables, which currently have poor support in email clients.

Documentation: https://github.com/maizzle/tailwindcss-box-shadow

### tailwindcss-email-variants

A Tailwind CSS plugin that provides variants for email client targeting hacks used in HTML emails.

Documentation: https://github.com/maizzle/tailwindcss-email-variants

### borderSpacing

A custom plugin that generates `border-spacing` utilities that use static values instead of CSS variables.

Here's a diff of the output between Tailwind's original and the custom plugin:

```diff
+ tailwindcss-preset-email
- tailwindcss

+ .border-spacing-x-1 {
+   border-spacing: 4px 0
+ }
- .border-spacing-x-1 {
-   --tw-border-spacing-x: 4px;
-   border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
- }
```

### Filters

The following plugins that generate utilities for CSS filters have been updated to use static values instead of CSS variables:

- blur
- brightness
- contrast
- dropShadow
- grayscale
- hueRotate
- invert
- saturate
- sepia
- backdropBlur
- backdropBrightness
- backdropContrast
- backdropGrayscale
- backdropHueRotate
- backdropInvert
- backdropOpacity
- backdropSaturate
- backdropSepia

### textDecoration

A custom plugin that generates `text-decoration` utilities that use the `text-decoration` property instead of `text-decoration-line`, which has poor support in email clients.

Here's a diff of the output between Tailwind's original and the custom plugin:

```diff
+ tailwindcss-preset-email
- tailwindcss

+ .underline {
+   text-decoration: underline
+ }
- .underline {
-   text-decoration-line: underline;
- }
```
