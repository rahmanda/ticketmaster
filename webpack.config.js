const path = require('path');
const webpack = require('webpack');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: NODE_ENV,
  entry: path.resolve(__dirname, './src/app.js'),
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
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
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new StyleExtHtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
  ],
};
