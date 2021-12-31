module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '15px', 
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#f03057'
      },
      backgroundImage: {
        'banner-img': "url('/public/images/banner.jpeg')",
       },
       zIndex: {
        '-10': '-10',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), 
  ],
}
