/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: '4px 5px 25px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        xs: '357px',

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }


        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      textColor: {
        skin: {
          main: 'var(--main)',
          red: 'var(--red)',
          tag: 'var(--tag)',
          hoverBlue: 'var(--btn-hover-blue)',
          hoverRed: 'var(--btn-hover-red)',
        },
      },
      backgroundColor: {
        skin: {
          main: 'var(--main)',
          secondary: 'var(--secondary)',
          tag: 'var(--tag)',
          tag_sec: 'var(--tag_sec)',
        },
      },
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif;",
        raleway: "'Raleway', sans-serif;",
        poppins: "'Poppins', sans- serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}