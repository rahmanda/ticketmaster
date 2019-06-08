const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./webpack.config');
const externals = Object.keys(require('./package.json').devDependencies);

module.exports = webpackMerge(defaultConfig, {
  mode: 'production',
  target: 'node',
  entry: path.resolve(__dirname, './src/app.server.js'),
  externals,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './tmp'),
    publicPath: '/ticketmaster',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx'],
  },
});
