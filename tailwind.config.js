/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shopping': "url('assets/bg.png')",
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'lgreen': {
        100: '#f0f4f2',
        200: '#e2e9e5',
        300: '#d8e2dc',
        400: '#d3ded8',
        500: '#c4d4ca',
        600: '#b6c9bd',
        700: '#a7beb0',
        800: '#98b3a3',
        900: '#8aa896',
      },
      'pink': {
        100: '#fce8eb',
        200: '#f9d2d8',
        300: '#f6bbc4',
        400: '#f4acb7',
        500: '#f3a5b1',
        600: '#f08e9d',
        700: '#ed7889',
        800: '#ea6176',
        900: '#e84a62',
      },
      'lpink': {
        100: '#ffe6ea',
        200: '#ffcad4',
        300: '#ffb3c1',
        400: '#ff99ac',
        500: '#ff8097',
        600: '#ff6682',
        700: '#ff4d6d',
        800: '#ff3358',
        900: '#ff1a44',
      },
      'brown': {
        100: '#e9e2e4',
        200: '#ded4d7',
        300: '#d3c5c9',
        400: '#c8b7bc',
        500: '#bca9ae',
        600: '#b19aa1',
        700: '#a68c93',
        800: '#9d8189',
        900: '#9b7d86',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}