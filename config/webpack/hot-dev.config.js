var config = require('./dev.config');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var jsxLoader = config.module.loaders.filter(function(loader) { return loader.key == 'jsx' })[0]
jsxLoader.loaders.unshift('react-hot');

config.module.loaders.push({
  test: /\.styl$/, 
  loader: "style-loader!css-loader!stylus-loader"
})

config.output.publicPath = 'http://localhost:8080/assets/'

config.plugins.push(
  new ExtractTextPlugin("[name].css", {allChunks: true}),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify("development")
    }
  })
  // ,
  // new BrowserSyncPlugin(
  //     // BrowserSync options 
  //     {
  //       host: 'localhost',
  //       port: 3333,
  //       proxy: 'http://0.0.0.0:3000/',
  //       logLevel: 'debug',
  //       tunnel: 'wiki'
  //     },
  //     // plugin options 
  //     {
  //       reload: false
  //     }
  //   )
)

config.entry.main.push(
  'webpack/hot/only-dev-server',
  'webpack-dev-server/client?http://localhost:8080'
)

module.exports = config;
