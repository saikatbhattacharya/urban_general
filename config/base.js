const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '../src/server/dist/public');
const APP_DIR = path.resolve(__dirname, '../src/client');

module.exports = {
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'eslint-loader',
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2)$/,
        exclude: /node_modules/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
};
