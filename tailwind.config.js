module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      'primary': '#F1F0EA',
      'secondary': '#2D232E',
    },
    textColor: {
      'primary': '#2D232E',
      'secondary': '#E0DDCF',
      'accent': '#AF9FA5'
    },
    height: {
      vh90: '90vh'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
