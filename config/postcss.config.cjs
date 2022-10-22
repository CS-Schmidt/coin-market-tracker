'use strict';

// PostCSS configuration object
module.exports = {
  // Plugins for PostCSS. Each plugin adds functionality to PostCSS as a CSS
  // transformation tool.
  plugins: [
    // The `postcss-normalize` plugin injects CSS normalize into the bundle.
    require('postcss-normalize'),
    // The `postcss-preset-env` plugin will use the browserslist
    // configuration to add polyfills to CSS bundles; autoprefixer is
    // included in postcss-preset-env.
    require('postcss-preset-env'),
    require('cssnano')({ preset: 'default' }),
  ],
};
