const path = require('path');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ReactSnapPlugin = require('./webpack/plugins/react_snap.plugin');
const getDirectories = require('./webpack/scripts');
const loaders = require('./webpack/loaders/loaders');
const prepareEntriesList = require('./webpack/entries');
const { preparePlugins, FileManagerPluginItem } = require('./webpack/plugins');

// Show Asset Path for production mode
// Change relative path to "path from the root" for production.
// it also affects "output.publicPath", plugins.HtmlReplaceWebpackPlugin
// and plugins.DefinePlugin
const ASSET_PATH = process.env.ASSET_PATH || './';

module.exports = (_env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;
  // Prepare Root folder.
  const rootFolder = path.resolve(__dirname, './');
  // For shared.
  const pagesFolder = isProduction ? './' : '';

  const pagesList = getDirectories('./src/content/pages');
  const preparedEntries = prepareEntriesList(pagesList);

  // const preparedPlugins = [];
  const pluginsList = preparePlugins(
    pagesList,
    rootFolder,
    pagesFolder,
    isProduction,
  );

  // Webpack
  return {
    devtool: isDevelopment && 'cheap-module-source-map',
    resolve: {
      //     fallback: { 'path': require.resolve('path-browserify') },
      // extensions: ['.js', '.jsx', '.png'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(rootFolder, 'src'),
        '@base': path.join(rootFolder, 'src/Components/00-base'),
        '@atoms': path.join(rootFolder, 'src/Components/01-atoms'),
        '@molecules': path.join(rootFolder, 'src/Components/02-molecules'),
        '@organisms': path.join(rootFolder, 'src/Components/03-organisms'),
        '@templates': path.join(rootFolder, 'src/Components/04-templates'),
        '@pages': path.join(rootFolder, 'src/Components/05-pages'),
      },
    },
    entry: preparedEntries,

    output: {
      path: path.join(rootFolder, '/dist'), // the bundle output path
      // filename: 'bundle.js', // the name of the bundle
      filename: `${pagesFolder}shared/js/[id]/[name].[contenthash:8].js`,
      clean: true,
      publicPath: isProduction ? ASSET_PATH : 'auto',
    },
    plugins: [
      pluginsList.indexPage,

      ...pluginsList.preparedPlugins,
      pluginsList.replaceSettings,
      pluginsList.copyPlugin,
      // // Expose environment variables from the webpack to application code.
      pluginsList.definePlugin,
      new FriendlyErrorsWebpackPlugin(),
      // This makes it possible for us to safely use env vars on our code
      isProduction &&
        new webpack.DefinePlugin({
          'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        }),
      isProduction &&
        new ReactSnapPlugin({
          include: [
            '/',
            '/01_Launch_screen',
            '/02_Home/index.html',
            '/03_Daily_checkin/index.html',
            '/04_Contributor_selections/index.html',
            '/05_Rest_level/index.html',
            '/06_Home_check_in/index.html',
            '/07_Energy_level/index.html',
            '/08_Activity_short/index.html',
            '/09_Activity_library/index.html',
            '/10_Indoor_outdoor_walk/index.html',
            '/11_Home_complete/index.html',
            '/12_Insights/index.html',
            '/14_Monthly_view/index.html',
            '/15_Healthcare_providers/index.html',
            '/16_Family_friends/index.html',
          ],
        }),
      // Archive files.
      isProduction && FileManagerPluginItem,
      // plugins.MiniCssExtractPlugin,
      // plugins.ImageminPlugin,
      // plugins.SpriteLoaderPlugin,
      // plugins.ImageminPlugin,
      // plugins.SpriteLoaderPlugin,
      // plugins.ProgressPlugin,
      // plugins.CleanWebpackPlugin,
      // plugins.StyleLintPlugin,
      // plugins.ESLintPlugin,
    ].filter(Boolean),
    devServer: {
      port: 3030, // you can change the port
      compress: true, // Enables asset compression for faster reloads.
      historyApiFallback: true, // Enables a fallback to index.html for
      // history-based routing.
      open: true, //  Opens the browser after launching the dev server.
      // overlay: true,// Displays Webpack errors in the browser window.
    },
    module: {
      rules: [
        loaders.JSLoader(isProduction),
        loaders.AssetsLoader,
        loaders.MDXLoader,
        loaders.CSSLoader,
        {
          test: /\.(png|jpe?g)$/,
          use: [
            {
              loader: 'responsive-loader',
              options: {
                outputPath: 'shared/assets/',
                // Set options for all transforms
              },
            },
          ],
          type: 'javascript/auto',
        },
        // loaders.CSSLoader,
        // loaders.SVGSpriteLoader,
        // loaders.ImageLoader,
        // loaders.JSLoader,
        // loaders.FontLoader,
        // loaders.TwigLoader,
        // loaders.YamlLoader,
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false,
            },
            mangle: {
              safari10: true,
            },
            output: {
              comments: false,
              ascii_only: true,
            },
            warnings: false,
          },
        }),
        new OptimizeCssAssetsPlugin(),
        new ImageMinimizerPlugin({
          test: /thumb\.(png)$/i,
          minimizer: {
            implementation: ImageMinimizerPlugin.squooshMinify,
            options: {
              resize: {
                enabled: true,
                width: 200,
              },
            },
          },
        }),
      ],
      // splitChunks: {
      //   chunks: 'all',
      //   minSize: 0,
      //   maxInitialRequests: 20,
      //   maxAsyncRequests: 20,
      //   cacheGroups: {
      //     vendors: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name(module, chunks, cacheGroupKey) {
      //         const packageName = module.context.match(
      //           /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
      //         )[1];
      //         return `${cacheGroupKey}.${packageName.replace('@', '')}`;
      //       },
      //     },
      //     common: {
      //       minChunks: 2,
      //       priority: -10,
      //     },
      //   },
      // },
      // runtimeChunk: 'single',
    },
  };
};
