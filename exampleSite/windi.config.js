module.exports = {
	extract: {

		include: [
			'layouts/**/*.html', // Layout files
			'content/**/*.{html,md}', // From content
      '../layouts/**/*.html', // for example site
			'themes/hugo-theme-windicss-starter/layouts/**/*.html'
		],
		exclude: [
			'node_modules/**/*',
			'.git/**/*'
		]
	},
	preflight: true, // Default CSS reset
	darkMode: "class",
	theme: {
    extend: {
			colors: {
        bg: 'var(--c-bg)',
				bg2: 'var(--c-bg2)',
        brand: 'var(--c-brand)',
        fg: 'var(--c-text)',
        code: 'var(--c-code)',
        gray: {
          '100': 'var(--c-gray-100)',
          '200': 'var(--c-gray-200)',
          '100': 'var(--c-gray-300)',
          '200': 'var(--c-gray-400)',
          '700': 'var(--c-gray-500)',
          '800': 'var(--c-gray-600)',
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
  },
  variants: {},
  plugins: [
    require('windicss/plugin/typography')
  ]
}