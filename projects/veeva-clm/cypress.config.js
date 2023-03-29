const { defineConfig } = require('cypress');
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
const { pa11y } = require('@cypress-audit/pa11y');
// const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');
module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  env: {
    preserveOriginalScreenshot: true,
  },
  lighthouse: {
    options: {
      formFactor: 'desktop',
      screenEmulation: {
        width: 500,
        height: 940,
        deviceScaleRatio: 1,
        mobile: false,
        disable: false,
      },
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on('task', {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });

      // addMatchImageSnapshotPlugin(on, config);

      // return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{feature,features,cy.js}',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    // baseUrl: "http://localhost:3030",
  },
});
