const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCommonConfig = require('./webpack.common');

const commonConfig = getCommonConfig(false);

module.exports = {
  ...commonConfig,
  mode: 'production',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'DatePicker.css',
    }),
  ],
  devtool: 'source-map',
};
