const { resolve } = require('path')

module.exports = {
  target: 'node',

  entry: {
    app: ['babel-polyfill', './src/index.js']
  },

  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].js'
  },

  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
