module.exports = {
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        // Ensure fonts with spaces have " " surrounding it.
        pop: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-100': 'rgba(10, 24, 24, 0.87)',
        'brand-200': 'rgba(10, 24, 24, 0.6)',
        'brand-300': 'rgba(8, 132, 80, 1)',
        'brand-400': 'rgba(3, 85, 84, 1)',
        'brand-500': 'rgba(3, 85, 51, 1)',
        'brand-600': 'rgba(243, 245, 245, 1)',
        'brand-700': 'rgba(46, 214, 144, 1)',
        'brand-800': 'rgba(239, 250, 245, 1)',
        'brand-900': 'rgba(209, 212, 212, 1)',
        'brand-1000': 'rgba(10, 24, 24, 0.38)',
      },
      extend: {
        backgroundImage: {
          'login-bg': "url('/assets/background.png')",
        },
      },
    },
    plugins: [],
  }
  