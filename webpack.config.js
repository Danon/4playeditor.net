const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        'scss': 'vue-style-loader!css-loader!sass-loader'
      },
    }
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ],
  },
  {
    test: /\.png$/,
    type: 'asset/resource',
  },
  {
    test: /initial.md$/,
    type: 'asset/source',
  },
  {
    test: /ChangeLog.md$/,
    use: [
      'html-loader',
      'markdown-loader',
    ]
  }
];

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].css'
  }),
  new VueLoaderPlugin(),
  new CopyWebpackPlugin({patterns: ["ChangeLog.md"]}),
];

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {rules},
  plugins,
};
