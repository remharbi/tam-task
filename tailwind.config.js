const purge = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
    purge: { enabled: purge, content: ['./build/**/*.html'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        'mobile': '360px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
        },
        fontFamily: {
            'sans': ['Roboto'],
            'display': ['Roboto'],
            'body': ['Roboto'],
          },
        backgroundColor: theme => ({
         ...theme('colors'),
         'primary': '#3490dc',
         'light-grey': '#FBFBFB',
         'brdr-color': '#E8E8E8',
         'danger': '#e3342f',
         'main-font': '#878B98'
        })
      },
    variants: {
        extend: {},
    },
    plugins: [],
}