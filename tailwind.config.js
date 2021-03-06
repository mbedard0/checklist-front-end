module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'desktop-sm': '1040px',
      'desktop-lg': '1728px',
    }, 
    fontSize: {
      'sm': '18px',
      'sm-md': '20px',
      'md': '28px',
      'lg': '32px'
    },
    extend: {
      colors: {
        'cursor-teal': '#2FE6FF',
        'border-stroke-color': '#ECECEC',
        'default': '#505050',
        'hover': '#F4F4F4',
        'off-black': '#242424',
        'error-red': '#FF3333'
      },
    },
  },
  daisyui: {
    themes: false,
    styled: false,
  },  
  plugins: [require("daisyui")],
}
