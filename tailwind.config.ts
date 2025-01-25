import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'ui-serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['ui-monospace', 'monospace']
      },
      maxWidth: {
        '2xl': '42rem'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '42rem',
            color: '#1a1a1a',
            lineHeight: '1.75'
          }
        }
      },
      letterSpacing: {
        'tight': '-0.015em',
        'wide': '0.02em'
      }
    },
  },
  plugins: [],
};

export default config;