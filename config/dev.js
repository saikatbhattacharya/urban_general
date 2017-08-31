const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const baseConfig = require('./base');

const PORT = process.env.PORT || 5000;

const APP_DIR = path.resolve(__dirname, '../src/client');

const config = _.merge({
  devServer: {
    contentBase: APP_DIR,
    historyApiFallback: true,
    hot: true,
    port: 8100,
    publicPath: 'http://localhost:8100/public/',
    proxy: {
      '*': {
        target: `http://localhost:${PORT}`,
      },
    },
    noInfo: false,
  },
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8100',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    `${APP_DIR}/index.jsx`,
  ],
  devtool: 'eval',
}, baseConfig);

config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: ['babel-loader'],
  exclude: /node_modules/,
  include: APP_DIR,
});

config.module.rules.push({
  test: /\.(png|jpg|gif|ico|xml)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: 'http://localhost:8100/public/icons/',
      },
    },
  ],
});

config.plugins = [].concat(baseConfig.plugins, [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"dev"',
  }),
  new StyleLintPlugin({
    files: `${APP_DIR}/styles/**/*.s(a|c)ss`,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]);

module.exports = config;
