import { defineConfig, presetIcons, 
  presetTypography, presetUno, presetWebFonts, 
  transformerDirectives, transformerVariantGroup } 
    from 'unocss'
// import { colors } from '@unocss/preset-mini'

export default defineConfig({
  theme: {
    darkMode: "class",
    preflight: true, // Default CSS reset
    colors: {
      bg: 'var(--c-bg)',
      bga: 'var(--c-bga)',
      brand: 'var(--c-brand)',
      fg: 'var(--c-text)',
      code: 'var(--c-code)',
      gray: {
        '100': 'var(--c-gray-100)',
        '200': 'var(--c-gray-200)',
        '300': 'var(--c-gray-300)',
        '400': 'var(--c-gray-400)',
        '500': 'var(--c-gray-500)',
        '600': 'var(--c-gray-600)',
        '700': 'var(--c-gray-700)',
        '800': 'var(--c-gray-800)',
        '900': 'var(--c-gray-900)',
      }
    },
    boxShadow: {
      box: '0px 5px 15px 0px rgba(0, 0, 0, 0.35)',
      header: 'var(--shadow-header)',
      totop: 'var(--shadow-totop)',
    },
    typography: {
      DEFAULT: {
        css: {
          color: 'inherit',
          '[class~="lead"]': {
            color: 'var(--c-gray-700)',
          },
          a: {
            color: 'inherit',
            '&:hover': {
              color: 'inherit',
            },
          }, 
          strong: {
            color: 'var(--c-gray-900)',
          },
          h1: {
            color: 'var(--c-gray-900)',
          },
          h2: {
            color: 'var(--c-gray-900)',
          },
          h3: {
            color: 'var(--c-gray-900)',
          },
          h4: {
            color: 'var(--c-gray-900)',
          },
          code: {
            backgroundColor: 'var(--c-code-bg)',
            color: 'var(--c-code)',
          },
        },
      },
    },
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        display: 'Rubik',
        sans: 'Roboto',
      }
    }),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})