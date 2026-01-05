/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Pulled from brand stripes in provided logo
        'stripe-teal': '#1FB5AE',
        'stripe-red': '#D7353A',
        'stripe-orange': '#F48C2A',
        'stripe-yellow': '#F6C542',
        ink: '#1F2933',
        paper: '#FFFFFF'
      }
    }
  },
  plugins: []
};

