/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container:{ 
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{ 
        primary:'#6ee7b7',
        dark:'#0f172a',
        secondary:'#9ca3af'
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

