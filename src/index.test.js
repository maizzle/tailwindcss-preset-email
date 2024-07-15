import path from 'path'
import postcss from 'postcss'
import emailPreset from '.'
import { describe, expect, test } from 'vitest'
import tailwindcss from 'tailwindcss'

// Custom CSS matcher
expect.extend({
  // Compare two CSS strings with all whitespace removed
  // This is probably naive but it's fast and works well enough.
  toMatchCss(received, argument) {
    function stripped(string_) {
      return string_
        .replaceAll(/\s/g, '')
        .replaceAll(';', '')
    }

    const pass = stripped(received) === stripped(argument)

    return {
      pass,
      actual: received,
      expected: argument,
      message: () => pass ? 'All good!' : 'CSS does not match',
    }
  }
})

// Function to run the plugin
function run(config, css = '@tailwind utilities', plugin = tailwindcss) {
  let { currentTestName } = expect.getState()

  config = {
    ...{
      presets: [emailPreset],
      important: false,
    },
    ...config,
  }

  return postcss(plugin(config)).process(css, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

test('borderSpacing', () => {
  const config = {
    content: [
      {
        raw: String.raw`
          <hr class="border-spacing-0">
          <hr class="border-spacing-x-1">
          <hr class="border-spacing-y-1">
        `
      }
    ],
  }

  return run(config).then(result => {
    expect(result.css).toMatchCss(String.raw`
      .border-spacing-0 {
        border-spacing: 0
      }
      .border-spacing-x-1 {
        border-spacing: 4px 0
      }
      .border-spacing-y-1 {
        border-spacing: 0 4px
      }
    `)
  })
})

test('textDecoration', () => {
  const config = {
    content: [
      {
        raw: String.raw`
          <hr class="underline">
          <hr class="overline">
          <hr class="line-through">
          <hr class="no-underline">
        `
      }
    ],
  }

  return run(config).then(result => {
    expect(result.css).toMatchCss(String.raw`
      .underline {
        text-decoration: underline
      }
      .overline {
        text-decoration: overline
      }
      .line-through {
        text-decoration: line-through
      }
      .no-underline {
        text-decoration: none
      }
    `)
  })
})

describe('Filters', () => {
  test('blur', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="blur-xl">
            <hr class="blur-[2px]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .blur-\[2px\] {
          filter: blur(2px)
        }
        .blur-xl {
          filter: blur(24px)
        }
      `)
    })
  })

  test('brightness', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="brightness-50">
            <hr class="brightness-[.33]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .brightness-50 {
          filter: brightness(.5)
        }
        .brightness-\[\.33\] {
          filter: brightness(.33)
        }
      `)
    })
  })

  test('contrast', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="contrast-50">
            <hr class="contrast-[.33]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .contrast-50 {
          filter: contrast(.5)
        }
        .contrast-\[\.33\] {
          filter: contrast(.33)
        }
      `)
    })
  })

  test('dropShadow', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="drop-shadow-sm">
            <hr class="drop-shadow">
            <hr class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .drop-shadow {
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))
        }
        .drop-shadow-\[0_35px_35px_rgba\(0\2c 0\2c 0\2c 0\.25\)\] {
          filter: drop-shadow(0 35px 35px rgba(0,0,0,0.25))
        }
        .drop-shadow-sm {
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05))
        }
      `)
    })
  })

  test('grayscale', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="grayscale">
            <hr class="grayscale-0">
            <hr class="grayscale-[50%]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .grayscale {
          filter: grayscale(100%)
        }
        .grayscale-0 {
          filter: grayscale(0)
        }
        .grayscale-\[50\%\] {
          filter: grayscale(50%)
        }
      `)
    })
  })

  test('hueRotate', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="hue-rotate-180">
            <hr class="-hue-rotate-60">
            <hr class="hue-rotate-[90deg]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .-hue-rotate-60 {
          filter: hue-rotate(-60deg)
        }
        .hue-rotate-180 {
          filter: hue-rotate(180deg)
        }
        .hue-rotate-\[90deg\] {
          filter: hue-rotate(90deg)
        }
      `)
    })
  })

  test('invert', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="invert">
            <hr class="invert-[.25]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .invert {
          filter: invert(100%)
        }
        .invert-\[\.25\] {
          filter: invert(.25)
        }
      `)
    })
  })

  test('saturate', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="saturate-0">
            <hr class="saturate-[.25]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .saturate-0 {
          filter: saturate(0)
        }
        .saturate-\[\.25\] {
          filter: saturate(.25)
        }
      `)
    })
  })

  test('sepia', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="sepia-0">
            <hr class="sepia-[.25]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .sepia-0 {
          filter: sepia(0)
        }
        .sepia-\[\.25\] {
          filter: sepia(.25)
        }
      `)
    })
  })

  test('backdropBlur', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="backdrop-blur-sm">
            <hr class="backdrop-blur-[2px]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .backdrop-blur-\[2px\] {
          backdrop-filter: blur(2px)
        }
        .backdrop-blur-sm {
          backdrop-filter: blur(4px)
        }
      `)
    })
  })

  test('backdropBrightness', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="backdrop-brightness-50">
            <hr class="backdrop-brightness-[1.75]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .backdrop-brightness-50 {
          backdrop-filter: brightness(.5)
        }
        .backdrop-brightness-\[1\.75\] {
          backdrop-filter: brightness(1.75)
        }
      `)
    })
  })

  test('backdropContrast', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="backdrop-contrast-50">
            <hr class="backdrop-contrast-[1.75]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .backdrop-contrast-50 {
          backdrop-filter: contrast(.5)
        }
        .backdrop-contrast-\[1\.75\] {
          backdrop-filter: contrast(1.75)
        }
      `)
    })
  })

  test('backdropGrayscale', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="backdrop-grayscale">
            <hr class="backdrop-grayscale-[.5]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .backdrop-grayscale {
          backdrop-filter: grayscale(100%)
        }
        .backdrop-grayscale-\[\.5\] {
          backdrop-filter: grayscale(.5)
        }
      `)
    })
  })

  test('backdropHueRotate', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="backdrop-hue-rotate-15">
            <hr class="-backdrop-hue-rotate-15">
            <hr class="backdrop-hue-rotate-[35deg]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .-backdrop-hue-rotate-15 {
          backdrop-filter: hue-rotate(-15deg)
        }
        .backdrop-hue-rotate-15 {
          backdrop-filter: hue-rotate(15deg)
        }
        .backdrop-hue-rotate-\[35deg\] {
          backdrop-filter: hue-rotate(35deg)
        }
      `)
    })
  })

  test('backdropInvert', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="backdrop-invert">
            <hr class="backdrop-invert-[.25]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .backdrop-invert {
          backdrop-filter: invert(100%)
        }
        .backdrop-invert-\[\.25\] {
          backdrop-filter: invert(.25)
        }
      `)
    })
  })

  test('backdropOpacity', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="backdrop-opacity-5">
            <hr class="backdrop-opacity-[.25]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .backdrop-opacity-5 {
          backdrop-filter: opacity(0.05)
        }
        .backdrop-opacity-\[\.25\] {
          backdrop-filter: opacity(.25)
        }
      `)
    })
  })

  test('backdropSaturate', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="backdrop-saturate-50">
            <hr class="backdrop-saturate-[.25]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .backdrop-saturate-50 {
          backdrop-filter: saturate(.5)
        }
        .backdrop-saturate-\[\.25\] {
          backdrop-filter: saturate(.25)
        }
      `)
    })
  })

  test('backdropSepia', () => {
    const config = {
      content: [
        {
          raw: String.raw`
            <hr class="backdrop-sepia">
            <hr class="backdrop-sepia-[.25]">
          `
        }
      ],
    }

    return run(config).then(result => {
      expect(result.css).toMatchCss(String.raw`
        .backdrop-sepia {
          backdrop-filter: sepia(100%)
        }
        .backdrop-sepia-\[\.25\] {
          backdrop-filter: sepia(.25)
        }
      `)
    })
  })
})
