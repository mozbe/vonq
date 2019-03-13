const __DEV__ = process.env.NODE_ENV === 'development';

const postCSSConfig = [

  /* linter that helps you avoid errors and enforce conventions in your styles */
  require('stylelint'),

  /* transform @import rules by inlining content */
  require('postcss-import')({
    path: ['src'],
  }),

  /* autoprefix for different browser vendors */
  require('autoprefixer')({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9',
    ],
    flexbox: 'no-2009',
  }),

  /* reset inherited rules */
  require('postcss-initial')({
    reset: 'inherited', // reset only inherited rules
  }),

  /* unwrap nested rules like Sass */
  require('postcss-nested'),

  /* Replaces simple-vars, more future proof? Plays well with postcss-calc */
  require('postcss-custom-properties')({
    preserve: true,
  }),

  /* minimize the number of repeat-selectors and rules */
  require('postcss-extend'),

  /* transform W3C CSS color function to more compatible CSS */
  // require('postcss-color-function'),

  /* Replaces postcss-math  */
  require('postcss-calc')({
    mediaQueries: true,
  }),

  /* use Custom Media Queries in CSS */
  require('postcss-custom-media'),

  /* simple and graceful media queries */
  require('postcss-media-minmax'),

  /* Log PostCSS messages in the console */
  require('postcss-reporter'),
];

if (__DEV__) {
  postCSSConfig.push(

    /* display warning messages right in your browser */
    require('postcss-browser-reporter'),
  );
}

// Export the PostCSS Config for usage in webpack
module.exports = postCSSConfig;
