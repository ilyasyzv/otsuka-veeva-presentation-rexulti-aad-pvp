const { readdirSync } = require('fs');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const getPages = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => !dirent.isDirectory())
    .filter((file) => !file.name.includes('css'))
    .map((dirent) =>
      dirent.name.replace('.tsx', '').replace('.jsx', '').toLowerCase(),
    );

//const directories = getDirectories('./src/content/pages');
// const pages = getPages('./src/content/pages');
const pages = getDirectories('./src/content/pages');

const fileManagerSettings = {
  events: {
    onStart: {
      mkdir: [],
    },
    onEnd: {
      delete: [],
      archive: [],
    },
  },
};

const ignoreDirs = ['assets'];
const distFolder = './dist';

// Prepare folders.
fileManagerSettings.events.onStart.mkdir = [
  `${distFolder}`,
  `${distFolder}/archives/`,
  `${distFolder}/zips/`,
];

pages.forEach((dir) => {
  let prepared_name = dir.replace('.jsx', '');
  prepared_name = dir.replace('page', '');
  // if (ignoreDirs.includes(dir)) {
  //   return;
  // }

  const ArchiveEntity = {};
  console.log(`Filemanager folders: ${prepared_name}`);

  // Prepare Archive entity.
  ArchiveEntity.source = `${distFolder}/${prepared_name}`;
  ArchiveEntity.destination = `${distFolder}/zips/${prepared_name}.zip`;

  fileManagerSettings.events.onEnd.delete.push(
    `${distFolder}/${prepared_name}/shared`,
  );
  fileManagerSettings.events.onEnd.archive.push(ArchiveEntity);
});
fileManagerSettings.events.onEnd.delete.push(`${distFolder}/veeva-library.js`);
fileManagerSettings.events.onEnd.delete.push(
  `${distFolder}/console-log-div.js`,
);

// Added Shared folder.
fileManagerSettings.events.onEnd.archive.push({
  source: `${distFolder}/shared/`,
  destination: `${distFolder}/zips/shared.zip`,
});

const fileManagerPluginItem = new FileManagerPlugin(fileManagerSettings);

module.exports = fileManagerPluginItem;
