const path = require('path');
const globImporter = require('node-sass-glob-importer');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = async ({ config }) => {
  const rootFolder = path.resolve(__dirname, '../');
  // SCSS
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            importer: globImporter(),
          },
        },
      },
    ],
  });

  // @todo check this part
  config.plugins.push(
    new _StyleLintPlugin({
      configFile: path.resolve(rootFolder, '.stylelintrc'),
      context: path.resolve(rootFolder, 'src/Components'),
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),

    new ESLintPlugin({
      overrideConfigFile: path.resolve(rootFolder, '.eslintrc.json'),
      context: path.resolve(rootFolder, 'src/Components'),
      extensions: ['js'],
    }),
  );

  // YAML
  config.module.rules.push({
    test: /\.ya?ml$/,
    loader: 'js-yaml-loader',
  });
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@': path.join(rootFolder, 'src'),
      '@base': path.join(rootFolder, 'src/Components/00-base'),
      '@atoms': path.join(rootFolder, 'src/Components/01-atoms'),
      '@molecules': path.join(rootFolder, 'src/Components/02-molecules'),
      '@organisms': path.join(rootFolder, 'src/Components/03-organisms'),
      '@templates': path.join(rootFolder, 'src/Components/04-templates'),
      '@pages': path.join(rootFolder, 'src/Components/05-pages'),
    },
  };
  return config;
};
