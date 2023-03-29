const path = require('path');
const validate = require('schema-utils');
const fse = require('fs-extra');
const { run } = require('react-snap');
const replace = require('replace-in-file');
const optionsSchema = require('./options-schema.js');

const getDirectories = require('../scripts');

const PLUGIN_NAME = 'ReactSnapPlugin';

const defaultOptions = {
  port: 45678,
  source: 'dist',
  destination: 'dist',
  publicPath: '',
  saveAs: 'html',
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
    '/R.0.0_Home/index.html',
  ],
  viewport: {
    width: 1080,
    height: 810,
  },
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true,
  },
  crawl: false,
  headless: true,
  puppeteer: {
    cache: false,
  },
  puppeteerIgnoreHTTPSErrors: true,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  concurrency: 1,
  removeBlobs: true,
  fixInsertRule: true,
  preloadImages: false,
  asyncScriptTags: true,
  inlineCss: true,
};

class ReactSnapPlugin {
  constructor(options) {
    validate(optionsSchema, options, {
      name: PLUGIN_NAME,
      baseDataPath: 'actions',
    });

    this.options = { ...defaultOptions, ...options };
  }

  async copyLibsToPages() {
    this.logger.info(
      `Copy shared libraries to pages folders ${this.options.source}`,
    );
    let pagesList = getDirectories('./src/content/pages');
    pagesList = pagesList.filter((page) => page !== 'shared');
    this.logger.info(`List of pages ${pagesList}`);
    try {
      await fse.copy(
        path.join(
          __dirname,
          `../../${this.options.source}/shared/veeva-library.js`,
        ),
        path.join(__dirname, `../../${this.options.source}/veeva-library.js`),
      );
      await fse.copy(
        path.join(
          __dirname,
          `../../${this.options.source}/shared/console-log-div.js`,
        ),
        path.join(__dirname, `../../${this.options.source}/console-log-div.js`),
      );
      this.logger.info(`success copy library to main page!`);
    } catch (err) {
      this.logger.error(err);
    }
    await pagesList.forEach(async (page) => {
      try {
        await fse.copy(
          path.join(__dirname, `../../${this.options.source}/shared`),
          path.join(__dirname, `../../${this.options.source}/${page}/shared`),
        );
        this.logger.info(`success copy library to ${page}!`);
      } catch (err) {
        this.logger.error(err);
      }
    });
  }

  async prerenderPages() {
    this.logger.info(`Statring to render pages`);
    await run({
      ...this.options,
    }).catch((error) => {
      this.logger.error(error);
      process.exit(1);
    });
  }

  async cleanPaths() {
    this.logger.info(`Statring to clean up link pathes to local folder`);
    let pagesList = getDirectories('./src/content/pages');
    pagesList = pagesList.filter((page) => page !== 'shared');
    await pagesList.forEach(async (page) => {
      try {
        const results = await replace({
          files: path.join(
            __dirname,
            `../../${this.options.source}/${page}/index.html`,
          ),
          from: new RegExp(
            `http:\/\/localhost:${this.options.port}\/${page}`,
            'g',
          ),
          to: '.',
        });
        this.logger.info('Replacement results: ', results);
      } catch (error) {
        this.logger.error('Error occurred: ', error);
      }
    });
  }

  apply(compiler) {
    this.context = this.options.context || compiler.options.context;
    this.logger = compiler.getInfrastructureLogger(PLUGIN_NAME);

    const runSnapshot = async () => {
      this.logger.info('Running React Snapshot');
      await this.copyLibsToPages();
      await this.prerenderPages();
      await this.cleanPaths();
    };

    compiler.hooks.afterEmit.tapPromise(PLUGIN_NAME, runSnapshot);
  }
}

module.exports = ReactSnapPlugin;
