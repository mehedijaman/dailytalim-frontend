/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        dailyTalim: {
          primary: {
            50: '#effef4',
            100: '#d9ffe7',
            200: '#b6fcd1',
            300: '#7ef7ae',
            400: '#3eea83',
            500: '#16db65',
          }, // Vibrant green for primary actions
          black: '#020202', // Near-black for text or dark backgrounds
          darkGreen: '#058C42', // Darker green for secondary elements
          deepGreen: '#04471C', // Even darker green for borders/muted areas
          richGreen: '#0D2818', // Deep, rich green for backgrounds/subtle accents
          mutedGray: '#737373', // Medium gray for muted text, borders, or icons
          darkBg: '#101720',
          sidebar: {
            light: '#f5f5f5',
            dark: '#18212f',
          },
          border: {
            dark: '#334155',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
