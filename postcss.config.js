const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const cssnano = require('cssnano')({
  preset: 'default'
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss, cssnano]
      : []
  ],
};
