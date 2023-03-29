const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const getDirectories = require('../scripts');

const preparePlugins = (pagesList, rootFolder, pagesFolder, isProduction) => {
  const preparedPlugins = [];
  const replaceSettings = [];
  const copySettings = [];

  pagesList.forEach((page) => {
    preparedPlugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve(rootFolder, 'src/index.html'),
        filename: `${pagesFolder}${page}/index.html`,
        chunks: [`${page}`],
        current_page: `${page}`,
        inject: true,
      }),
    );

    replaceSettings.push({
      pattern: new RegExp(`../${page}/${page}.js`, 'g'),
      replacement: `./${page}.js`,
    });

    copySettings.push({
      from: path.resolve(rootFolder, `src/content/pages/${page}`, 'thumb.png'),
      to: path.resolve(rootFolder, `dist/${page}`, 'thumb.png'),
    });

    copySettings.push({
      from: path.resolve(rootFolder, 'src', 'veeva-library.js'),
      to: path.resolve(rootFolder, `dist/${page}`, 'veeva-library.js'),
    });

    copySettings.push({
      from: path.resolve(rootFolder, 'src', 'console-log-div.js'),
      to: path.resolve(rootFolder, `dist/${page}`, 'console-log-div.js'),
    });
  });

  const pluginsList = {};
  pluginsList.indexPage = new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: true,
    current_page: '01_Launch_screen',
    chunks: ['index'],
  });

  pluginsList.preparedPlugins = preparedPlugins;
  pluginsList.replaceSettings = new HtmlReplaceWebpackPlugin(replaceSettings);
  pluginsList.copyPlugin = new CopyPlugin({ patterns: copySettings });

  // Expose environment variables from the webpack to application code.
  pluginsList.definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      isProduction ? 'production' : 'development',
    ),
  });
  return pluginsList;
};
module.exports = preparePlugins;
