module.exports = function(api) {
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-env', { targets: { esmodules: true } }]
    ],
    // plugins: [
    //   ["babel-plugin-webpack-alias-7"],
    // ],
    // env: {
    //   test: {
    //     presets: [
    //       [
    //         '@babel/preset-env',
    //         {
    //           targets: { esmodules: true, node: 'current' }
    //         }
    //       ]
    //     ],
    //     plugins: [
    //       ["babel-plugin-webpack-alias-7"],
    //     ]
    //   }
    // },
  }
}
