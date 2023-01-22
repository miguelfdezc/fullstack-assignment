const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const path = require('path');
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://root:pass@localhost:27017/testdb';
var API_URL = process.env.API_URL || "https://www.alphavantage.co/query";
var API_KEY = process.env.API_KEY || "OC88HBQUW3XVKURT";
var PACKAGE = require('./package.json');
var version = PACKAGE.version;

const config = {
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.cjs'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.json'
    ],
  },
  plugins: [
    // new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version),
      MONGODB_URI: JSON.stringify(MONGODB_URI),
      API_URL: JSON.stringify(API_URL),
      API_KEY: JSON.stringify(API_KEY)
    }),
  ],
};

module.exports = config;
