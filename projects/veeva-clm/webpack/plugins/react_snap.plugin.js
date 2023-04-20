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
    '/A.0.Home/index.html',
    '/A.1.0_Executive_summary/index.html',
    '/A.2.1.1_S_Overview/index.html',
    '/A.2.1.2_S_Overview/index.html',
    '/A.2.1.3_S_Overview/index.html',
    '/A.2.2.1_B_Overview/index.html',
    '/A.2.2.2_B_Overview/index.html',
    '/A.2.2.3_B_Overview/index.html',
    '/A.2.3.1_LAIs/index.html',
    '/A.2.3.2_LAIs/index.html',
    '/A.2.4_Summary/index.html',
    '/A.3.0_Clinical_profile/index.html',
    '/A.3.1_Clinical_overview/index.html',
    '/A.3.2.1_Efficacy/index.html',
    '/A.3.2.2_Efficacy/index.html',
    '/A.3.2.3_Efficacy/index.html',
    '/A.3.3.1_Safety/index.html',
    '/A.3.3.2_Safety/index.html',
    '/A.3.3.3_Safety/index.html',
    '/A.3.3.4_Safety/index.html',
    '/A.3.4_Dosing/index.html',
    '/A.3.5.1_Additional/index.html',
    '/A.3.5.2_Additional/index.html',
    '/A.3.5.3_Additional/index.html',
    '/A.3.5.4_Additional/index.html',
    '/A.3.5.5_Additional/index.html',
    '/A.4.0_Economic_value/index.html',
    '/A.5.1_Patients_support_providers/index.html',
    '/A.5.2_Patients_support_providers/index.html',
    '/A.6.1.1_Appendix_Safety/index.html',
    '/A.6.1.2_Appendix_Safety/index.html',
    '/A.6.2_Apendix_MOA/index.html',
    '/A.6.3.X_Apendix_Safety/index.html',
    '/A.7.0_ISI/index.html',
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
