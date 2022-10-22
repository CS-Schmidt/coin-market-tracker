'use strict';

var path = require('path');

// Babel configuration function
module.exports = function createConfig({ env, cache }) {
  var isProduction = env('prod');
  // Tells Babel to cache the result of the config function. This way Babel
  // avoids recomputing the config every time a file is compiled.
  cache.forever();
  // Return configuration object
  return {
    // Plugins are configured here. Babel's code transformations are enabled by
    // applying plugins (or presets) to your configuration file. Plugins run
    // before presets and are loaded from last to first.
    plugins: isProduction ? null : ['react-refresh/babel'],
    // Presets are declared here. Each acts as a sharable set of Babel plugins
    // and/or config options. Presets are loaded from last to first, after
    // plugins.
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: '3.22.8',
          configPath: path.resolve('.browserslistrc'),
        },
      ],
      '@babel/preset-react',
    ],
  };
};
