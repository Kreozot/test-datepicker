const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getCommonConfig = require('./webpack.common');

const commonConfig = getCommonConfig(true);

const devServerConfig = {
  open: true,
  hot: true,
  contentBase: [
    path.join(__dirname, './static'),
  ],
};

const appConfig = {
  ...commonConfig,
  mode: 'development',
  entry: path.join(__dirname, 'src/dev'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/index.js',
  },
  devServer: devServerConfig,
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};

module.exports = appConfig;
