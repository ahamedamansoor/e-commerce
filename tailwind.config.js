/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F1F5',
          100: '#D8DCE3',
          200: '#B1B8C7',
          300: '#8A94AB',
          400: '#64708F',
          500: '#3D4C73',
          600: '#2F3A57',
          700: '#242D45',
          800: '#1A2138',
          900: '#0F1424',
        },
        gold: {
          50: '#FBF8EB',
          100: '#F7F0D7',
          200: '#EFE1AF',
          300: '#E7D287',
          400: '#DFC45F',
          500: '#D4AF37',
          600: '#B3922C',
          700: '#8D7222',
          800: '#685319',
          900: '#42340F',
        },
        cream: {
          50: '#FEFCF8',
          100: '#FDF9F1',
          200: '#FBF3E3',
          300: '#F9EDD5',
          400: '#F7E7C7',
          500: '#F5E1B9',
          600: '#F3DB9B',
          700: '#EDCC70',
          800: '#E7BD45',
          900: '#D9A81C',
        },
        success: {
          100: '#E6F4EA',
          500: '#34A853',
          900: '#1E7E34',
        },
        warning: {
          100: '#FFF8E6',
          500: '#FBBC04',
          900: '#C49102',
        },
        error: {
          100: '#FDEBE9',
          500: '#EA4335',
          900: '#B31412',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.125rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }], 
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
};