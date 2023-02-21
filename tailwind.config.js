/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      green: {
        300: '#6ee7b7',
        900: '#064e3b',
      },
      neutral: {
        200: '#e5e5e5',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
};

/*
    Tailwind CSS works by scanning all of your HTML, JavaScript components, and any other template files for class names, then generating all of the corresponding CSS for those styles.

    In order for Tailwind to generate all of the CSS you need, it needs to know about every single file in your project that contains any Tailwind class names.

    Configure the paths to all of your content files in the content section of your configuration file:

    https://tailwindcss.com/docs/content-configuration
    */
