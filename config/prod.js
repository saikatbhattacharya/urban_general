const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');

const baseConfig = require('./base');


const APP_DIR = path.resolve(__dirname, '../src/client/src');

const config = _.merge({
  entry: [
    `${APP_DIR}/index.jsx`,
  ],
  cache: false,
}, baseConfig);

config.plugins = [].concat(baseConfig.plugins, [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
  new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]);

config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: ['babel-loader'],
  include: APP_DIR,
});

module.exports = config;
