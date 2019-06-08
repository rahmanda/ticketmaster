const path = require('path');
const webpack = require('webpack');
const HtmlInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');

const defaultConfig = require('./webpack.config');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = webpackMerge(defaultConfig, {
  mode: NODE_ENV,
  entry: path.resolve(__dirname, './src/app.client.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './docs'),
    publicPath: NODE_ENV === 'development' ? '/' : '/ticketmaster',
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new HtmlInlineCSSWebpackPlugin({
      leaveCSSFile: false,
      replace: {
        removeTarget: true,
        target: '<!-- inline_css_plugin -->',
      },
    }),
    new CopyPlugin([
      { from: 'public' },
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
  ],
});
