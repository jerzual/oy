var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path/*.replace(/^\/base\//, '').replace(/\.js$/, '')*/;
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/src/js/',

  paths: {
    jquery: 'vendor/zepto',
    underscore: 'vendor/lodash',
    backbone: 'vendor/backbone',
    'backbone-localStorage': 'vendor/backbone.localStorage',
    handlebars: 'vendor/handlebars',
    ratchet: 'vendor/ratchet',
    pixi: 'vendor/pixi',
    rng: 'vendor/rng',
    text: 'vendor/text'
  },
  shim: {
    // Libraries
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    rng: {
      exports: 'RNG'
    },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    'backbone-localStorage': {
      exports: 'Backbone',
      deps: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },

    /*
     * Our app requires Backbone
     * (which in turn requires LoDash and jQuery)
     */
    app: {
      deps: ['backbone','ratchet']
    }
  },
  // dynamically load all test files
  deps: allTestFiles,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
