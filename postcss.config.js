const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
    theme: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
        fontFamily: {
          display: ['Gilroy', 'sans-serif'],
          body: ['Graphik', 'sans-serif'],
        },
        borderWidth: {
          default: '1px',
          '0': '0',
          '2': '2px',
          '4': '4px',
        },
        extend: {
          colors: {
            cyan: '#9cdbff',
          },
          spacing: {
            '96': '24rem',
            '128': '32rem',
          }
        }
      },
   
      variants: {
        appearance: ['responsive'],
       
        borderColor: ['responsive', 'hover', 'focus'],
       
        outline: ['responsive', 'focus'],
        
        zIndex: ['responsive'],
      },
    
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('tailwindcss-transforms'),
        require('tailwindcss-transitions'),
        require('tailwindcss-border-gradients'),
        purgecss({
            content: ["./**/*.html"],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
          require("cssnano")({
            preset: "default",
          }),
      ],
}