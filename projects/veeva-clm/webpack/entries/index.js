/**
 * Preparing Entries list for Veeva Suitable Structure output.
 *
 * keep in mind - key of array will be used as [id] later in plugins and output.
 *
 * @param {*} pagesList list of pages that need to be rendered.
 * @returns
 */
const prepareEntriesList = (pagesList) => {
  const preparedEntries = {
    index: './src/index.js',
  };

  pagesList.forEach((page) => {
    preparedEntries[`${page}`] = {
      import: './src/index.js',
      // old way import: `./src/pages/${page}/${page}.jsx`,
      filename: 'shared/js/[name].js',
    };
  });

  return preparedEntries;
};

module.exports = prepareEntriesList;
