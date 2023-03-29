// @ts-nocheck
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

const JSLoader = (isProduction) => {
  return {
    test: /\.(ts|tsx|js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        cacheDirectory: true,
        cacheCompression: false,
        envName: isProduction ? 'production' : 'development',
      },
    },
  };
};

const AssetsLoader = {
  test: /\.(png|jpg|svg|gif|woff|woff2|eot|ttf|otf|pdf)$/i,
  type: 'asset/resource',
  exclude: /thumb/,
  generator: {
    filename: 'shared/assets/[name][ext]',
  },
};

const MDXLoader = {
  test: /\.mdx?$/,
  use: ['babel-loader', '@mdx-js/loader'],
};
const ImageLoader = {
  test: /\.(png|svg|jpg|gif)$/i,
  exclude: /icons\/.*\.svg$/,
  loader: 'file-loader',
};

// const CSSLoader = {
//     test: /\.(sass|scss|css)$/i,
//     exclude: /node_modules/,
//     use: [
//         MiniCssExtractPlugin.loader,
//         {
//             loader: 'css-loader',
//             options: {
//                 sourceMap: false,
//                 url: false,
//             },
//         },
//         {
//             loader: 'postcss-loader',
//             options: {
//                 sourceMap: true,
//             },
//         },
//         {
//             loader: 'sass-loader',
//             options: {
//                 sourceMap: true,
//                 sassOptions: {
//                     importer: globImporter(),
//                     outputStyle: 'compressed',
//                 },
//             },
//         },
//     ],
// };
const CSSLoader = {
  test: /\.(sa|sc|c)ss$/, // styles files
  use: ['style-loader', 'css-loader', 'sass-loader'],
};

const SVGSpriteLoader = {
  test: /icons\/.*\.svg$/, // your icons directory
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    spriteFilename: '../dist/icons.svg',
  },
};

const FontLoader = {
  test: /.(woff|woff2|ttf|eot|otf|svg)$/,
  loader: 'file-loader',
  include: [/fonts/],
};

const YamlLoader = {
  test: /\.ya?ml$/,
  loader: 'js-yaml-loader',
};

module.exports = {
  JSLoader,
  AssetsLoader,
  MDXLoader,
  CSSLoader,
  SVGSpriteLoader,
  ImageLoader,
  FontLoader,
  YamlLoader,
};
