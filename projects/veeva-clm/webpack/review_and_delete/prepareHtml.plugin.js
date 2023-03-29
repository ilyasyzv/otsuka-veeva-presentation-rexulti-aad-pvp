// Not Using anywhere.
const glob = require('glob');
const _HtmlWebpackPlugin = require('html-webpack-plugin');

function prepareHtmlPlugins(pattern, separator = 'components/') {
  const htmlPlugins = [];

  glob.sync(pattern).forEach((file) => {
    const filePath = file.split(separator)[1].replace('.html', '');
    console.log('prepare:', file, filePath);
    const componentChunk = filePath + '.component';
    const jsChunk = filePath + '.script';
    const cssChunk = filePath + '.style';

    htmlPlugins.push(
      new _HtmlWebpackPlugin({
        filename: filePath + '.html',
        chunks: [componentChunk, jsChunk, cssChunk],
        template: file,
        minify: false,
      }),
    );
  });

  return htmlPlugins;
}

module.exports = prepareHtmlPlugins;
