const hooks = require('require-extension-hooks')

// Setup browser environment
require('browser-env')()

hooks('ts').plugin('typescript').push()
// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push()
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push()
// hooks(['vue', 'js']).exclude(({filename}) => filename.includes(/\/node_modules\//) || filename.includes('webpack.config.test.js')).plugin('babel').push()
// hooks(['vue', 'js', 'ts']).plugin('module')
hooks('js').exclude(({filename}) => filename.includes('node_modules') || filename.includes('webpack.config.test.js'))

// .exclude(({filename}) => filename.match(/\/node_modules\//)).plugin('babel-7', {}).push()