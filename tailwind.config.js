module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'desktop-lg': '1728px',
      'desktop-sm': '1040px',
      'mobile': '320px'
    },
    fontSize: {
      'sm': '18px',
      'sm-md': '20px',
      'md': '28px'
      // 28 (list name when typing), 18 buttons (top done, cancel, edit, delete), 20 for list, 32 (Lists on main page)
    },
    extend: {
      colors: {
        'cursor-teal': '#2FE6FF',
        'border-stroke-color': '#ECECEC'
      }
    },
  },
  plugins: [],
}
