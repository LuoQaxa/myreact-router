var path = require('path');
var rootPath = path.resolve(__dirname);
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    path: rootPath + '/build',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx|js?$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new htmlwebpackplugin({
      template: './index.html'
    })
  ]
};
