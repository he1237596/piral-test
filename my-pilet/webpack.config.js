/*
 * @Author: Chris
 * @Date: 2023-09-08 21:39:43
 * @LastEditors: Chris
 * @LastEditTime: 2023-09-11 11:35:32
 * @Descripttion: **
 */
const path = require('path');

module.exports = (config) => {
  if (config.module.rules.length && Array.isArray(config.module.rules[0].oneOf)) {
    config.module.rules[0].oneOf.unshift({
      test: /\.less$/,
      exclude: [/varColor/],
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: {
              mode: 'local',
              localIdentName: process.env.NODE_ENV === 'production' ? '[hash:base64]' : '[local]_[hash:base64:6]',
            },
          },
        },
        require.resolve('less-loader'),
      ],
    });
  }
  config.resolve.alias = {
    '@': path.resolve(__dirname, './src'),
  };
  // config.devtool = "cheap-module-eval-source-map"
  config.devtool = "cheap-module-source-map"
  return config;
};
