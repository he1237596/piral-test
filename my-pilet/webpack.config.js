/*
 * @Author: Chris
 * @Date: 2023-09-08 21:39:43
 * @LastEditors: Chris
 * @LastEditTime: 2023-09-21 10:51:58
 * @Descripttion: **
 */
const path = require('path');
const Minicss = require("mini-css-extract-plugin")
const isDev = process.env.NODE_ENV !== 'production'
module.exports = (config) => {
  if (config.module.rules.length && Array.isArray(config.module.rules[0].oneOf)) {
   console.log(config.module.rules[0].oneOf)
    config.module.rules[0].oneOf.unshift({
      test: /\.less$/i,
      exclude: [/dd\.less$/],
      use: [
        // 'style-loader',
        isDev ? "style-loader" : {
          loader: Minicss.loader
        }, //  Minicss.loader将 CSS 抽离到单独的文件中，而非js内
        {
          loader: 'css-loader',
          options: {
            sourceMap: !isDev,
            modules: {
              mode: 'local',
              // localIdentName: isDev ? '[path][name]__[local]':'[hash:base64]',
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
            // modules: true
          },
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: isDev,
          },
        },
      ],
    });
  }
  config.module.rules[0].oneOf.unshift(
    {
      test: /dd\.less$/, // 匹配全局样式文件
      use: [
        Minicss.loader,
        'css-loader',
        'less-loader',
      ],
    }
  )

  config.resolve.alias = {
    '@': path.resolve(__dirname, './src'),
  };
  console.log(config.plugins)
  // config.plugins = [new Minicss({
  //   filename: '[name].css', // 抽离后的 CSS 文件的名称
  //   chunkFilename: '[name]fff.css', // 抽离后的 CSS 文件的名称（用于代码分割）
  // }),]
  console.log(config.plugins)

  config.plugins.concat(isDev ? [] : [new Minicss({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css'
  })])
  // config.plugins.push(new Minicss({
  //   filename: '[name].css', // 抽离后的 CSS 文件的名称
  //   chunkFilename: '[id].css', // 抽离后的 CSS 文件的名称（用于代码分割）
  // }))
  config.devtool = isDev ? "cheap-module-source-map" : false
  // config.devtool = false
  return config;
};
