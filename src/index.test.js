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
    },
    ...config,
  }

  return postcss(plugin(config)).process(css, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

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
})
