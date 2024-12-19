/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        green:{
          347: '#009A44',
          349: '#046A38',
          350: '2C5234',
          361: '#43B02A',
          368: '#86BC25',
          382: '#C4D600',
          587: '#E3E48D'
          
        },
        blue: {
          280: '#012169',
          299: '#00A3E0',
          2915: '#62B5E5',
          7711: '#0097A9',
          7690: '#0076A8'
        },
        grey: {
          2:'#D0D0CE',
          7: '#97999B',
          9: '#75787B',
          11: '#53565A'
        },
        red:{
          485:'#DA291C'
        },
        orange: {
          144: '#ED8B00'
        },
        yellow:{
          116: '#FFCD00'
        }
      }

    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  plugins: [],
}

