module.exports = {
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        // Ensure fonts with spaces have " " surrounding it.
        pop: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-color': '#7E6EFF',
        success: '#30D158',
        error: '#FF453A',
        warning: '#EBAF65',
        white: '#FFFFFF',
        background: '#121214',
        active: '#7E6EFF',
        inactive: '#ffffff80',
        divider: '#ffffff1a',
      },
      extend: {
        backgroundImage: {
          'login-bg': "url('/assets/background.png')",
        },
      },
    },
    plugins: [],
  }
  