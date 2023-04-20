const path = require('path');
const validate = require('schema-utils');
const fse = require('fs-extra');
const { run } = require('react-snap');
const replace = require('replace-in-file');
const puppeteer = require('puppeteer');
const url = require('url');
const sharp = require('sharp');
const optionsSchema = require('./options-schema.js');
const puppeteer = require('puppeteer');
const url = require('url');
const sharp = require('sharp');

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
    '/R.0.0_Home/index.html',
    '/R.0.1_Popup_isi/index.html',
    '/R.1.0_Executive_summary/index.html',
    '/R.2.1_AAD_Overview/index.html',
    '/R.3.0_Clinical_profile/index.html',
    '/R.3.1_Mechanism_of_action/index.html',
    '/R.3.2_Clinical_studies_overview/index.html',
    '/R.3.3.1_Study_6/index.html',
    '/R.3.4.1_Study_7/index.html',
    '/R.3.5_Study_6&7_safety/index.html',
    '/R.3.6_Dosing/index.html',
    '/R.3.7_Summary/index.html',
    '/R.4.0_Patient_support/index.html',
    '/R.5.0_Appendix/index.html',
    '/R.6.0_ISI/index.html',
    '/R.2.2_AAD_Overview/index.html',
    '/R.2.3_AAD_Overview/index.html',
    '/R.2.4_AAD_Overview/index.html',
    '/R.2.5_AAD_Overview/index.html',
    '/R.2.6_AAD_Overview/index.html',
    '/R.2.7_AAD_Overview/index.html',
    '/R.3.3.2_Study_6/index.html',
    '/R.3.3.3_Study_6/index.html',
    '/R.3.4.2_Study_7/index.html',
    '/R.3.4.3_Study_7/index.html',
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

  async createScreenShots() {
    try {
      let pagesList = getDirectories('./src/content/pages');
      pagesList = pagesList
        .filter((page) => page !== 'shared')
        .map((page) => this.takeScreenshotWithResize(page));
      return Promise.all(pagesList);
    } catch (error) {
      this.logger.error('Error occurred: ', error);
    }
    return new Promise();
  }

  async takeScreenshotWithResize(dirName) {
    const pagePath = `./dist/${dirName}`;
    return this.takeScreenshot(pagePath, 'index.html', 'thumb_big.png').then(
      () => {
        this.logger.info(`Create screenshot for page: ${pagePath}`);
        if (fse.existsSync(path.join(pagePath, 'thumb_big.png'))) {
          sharp(path.join(pagePath, 'thumb_big.png'))
            .resize(200, 150, {
              kernel: sharp.kernel.nearest,
              fit: 'contain',
              position: 'left top',
              background: { r: 255, g: 255, b: 255, alpha: 0.5 },
            })
            .toFile(path.join(pagePath, 'thumb.png'), (err) => {
              if (err) {
                this.logger.error(`Image resize ${err}`);
              } else {
                this.logger.info(`Resize screenshot for page: ${pagePath}`);
                fse.unlinkSync(path.join(pagePath, 'thumb_big.png'));
              }
            });
        }
      },
    );
  }

  async takeScreenshot(
    dirName,
    file = 'index.html',
    screenshotName = 'thumb.png',
  ) {
    if (fse.existsSync(path.join(dirName, file))) {
      const browser = await puppeteer.launch();

      const page = await browser.newPage();
      await page.setViewport({ width: 1024, height: 768 });
      await page.goto(url.pathToFileURL(path.join(dirName, file)));

      await page.screenshot({
        path: path.join(dirName, screenshotName),
      });

      await browser.close();
    }
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
      return Promise.all([this.copyLibsToPages(), this.prerenderPages()]).then(
        () => {
          return this.createScreenShots().then(() => {
            return this.cleanPaths();
          });
        },
      );
    };

    compiler.hooks.afterEmit.tapPromise(PLUGIN_NAME, runSnapshot);
  }
}

module.exports = ReactSnapPlugin;
