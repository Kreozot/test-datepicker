const path = require('path');
const { version } = require('./package.json');

module.exports = function getWebpackConfig(devMode) {
  return {
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules',
      ],
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'ts-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  auto: true,
                  localIdentName: devMode
                    ? '[path][name]__[local]_[hash:base64:5]'
                    : `[local]_[hash:base64]_${version}`,
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  };
};
