const path = require('path')
const NsVueTemplateCompiler = require('nativescript-vue-template-compiler')
const coreModulesPackageName = 'tns-core-modules'
module.export = {
  module: {
    rules: [
      {
        test: /-page\.js$/,
        use: 'nativescript-dev-webpack/script-hot-loader'
      },
    ]
    // rules: [
    //   {
    //     test: /[\/|\\]app\.css$/,
    //     use: [
    //       'nativescript-dev-webpack/style-hot-loader',
    //       {
    //         loader: 'nativescript-dev-webpack/css2json-loader',
    //         options: { useForImports: true }
    //       }
    //     ]
    //   },
    //   {
    //     test: /[\/|\\]app\.scss$/,
    //     use: [
    //       'nativescript-dev-webpack/style-hot-loader',
    //       {
    //         loader: 'nativescript-dev-webpack/css2json-loader',
    //         options: { useForImports: true }
    //       },
    //       'sass-loader'
    //     ]
    //   },
    //   {
    //     test: /\.css$/,
    //     exclude: /[\/|\\]app\.css$/,
    //     use: [
    //       'nativescript-dev-webpack/style-hot-loader',
    //       'nativescript-dev-webpack/apply-css-loader.js',
    //       { loader: 'css-loader', options: { url: false } }
    //     ]
    //   },
    //   {
    //     test: /\.scss$/,
    //     exclude: /[\/|\\]app\.scss$/,
    //     use: [
    //       'nativescript-dev-webpack/style-hot-loader',
    //       'nativescript-dev-webpack/apply-css-loader.js',
    //       { loader: 'css-loader', options: { url: false } },
    //       'sass-loader'
    //     ]
    //   },
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: ['@babel/preset-env']
    //       }
    //     }
    //   },
    //   {
    //     test: /\.ts$/,
    //     loader: 'ts-loader',
    //     options: {
    //       appendTsSuffixTo: [/\.vue$/],
    //       allowTsInNodeModules: true,
    //       compilerOptions: {
    //         declaration: false
    //       }
    //     }
    //   },
    //   {
    //     test: /\.vue$/,
    //     loader: 'vue-loader',
    //     options: {
    //       compiler: NsVueTemplateCompiler
    //     }
    //   }
    // ] 
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, `node_modules/${coreModulesPackageName}`),
      path.resolve(__dirname, 'node_modules'),
      `node_modules/${coreModulesPackageName}`,
      'node_modules'
    ],
    alias: {
      '@': path.resolve(__dirname, 'app'),
    },
    plugins: [

    ]
  }
}
