// Karma configuration
// Generated on Tue Apr 07 2020 18:42:28 GMT+0200 (hora de verano de Europa central)
const webpackConfig = require('./app/tests/helpers/webpack.config.test')

module.exports = function(config) {
  config.set({
    autowatch: true,
    
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['tap'],

    // list of files / patterns to load in the browser
    files: [
      // { pattern: 'app/tests/**/*.test.js', watched: false },
      { pattern: 'app/tests/**/*.test.js' }
      // 'app/tests/index_test.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/tests/**/*.test.js': ['webpack', 'sourcemap']
      // 'app/tests/index_test.js': ['webpack']
    },

    webpack: {
      // mode: webpackConfig.mode,
      // context: webpackConfig.context,
      resolve: webpackConfig.resolve,
      // node: webpackConfig.node,
      module: webpackConfig.module,
      // devtool: 'inline-source-map'
      // config: './webpack.config.js'
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['tap-pretty'],

    tapReporter: {
      prettify: require('faucet'), // default 'standard TAP' output
      separator: '****************************'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
    
  })
}
