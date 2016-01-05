var config = require('./dev.config');
const webpack = require('webpack');

var jsxLoader = config.module.loaders.filter(function(loader) { return loader.key == 'jsx' })[0]
jsxLoader.loaders.unshift('react-hot');

config.output.publicPath = 'http://localhost:8080/assets/'

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify("development")
    }
  })
)

config.entry.main.push(
  'webpack/hot/only-dev-server',
  'webpack-dev-server/client?http://localhost:8080'
)

module.exports = config;
