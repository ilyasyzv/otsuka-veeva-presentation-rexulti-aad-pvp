const optionsSchema = {
  title: 'ReactSnapPluginOptions',
  type: 'object',
  additionalProperties: true,
  definitions: {
    port: {
      description: 'Express server port',
      type: 'integer',
      default: 45678,
    },
    source: {
      description: 'Source directory for processing',
      type: 'string',
      default: 'dist',
    },
    destination: {
      description: 'Destination directory for result artifacts',
      type: 'string',
      default: 'dist',
    },
    concurrency: {
      description: 'Number of concurrent tasks',
      type: 'integer',
      default: 4,
    },
    include: {
      description: 'List of paths to crawl',
      type: 'array',
      minItems: 1,
      additionalItems: true,
      items: {
        type: 'string',
        minLength: 1,
      },
    },
    userAgent: {
      description: 'Browser user agent used for crawling',
      type: 'string',
      default: 'ReactSnap',
    },
    headless: {
      description: 'Run browser in headless mode',
      type: 'boolean',
      default: true,
    },
    puppeteer: {
      description: 'Puppeteer options',
      type: 'object',
      properties: {
        cache: {
          description: 'Cache browser instance',
          type: 'boolean',
          default: false,
        },
      },
    },
    puppeteerArgs: {
      description: 'Puppeteer arguments',
      type: 'array',
      minItems: 1,
      additionalItems: true,
    },
    puppeteerIgnoreHTTPSErrors: {
      description: 'Ignore HTTPS errors',
      type: 'boolean',
      default: true,
    },
    publicPath: {
      description: 'Public path for static assets',
      type: 'string',
      default: '/',
    },
    minifyCss: {
      description: 'Minify CSS',
      type: 'object',
    },
    minifyHtml: {
      description: 'Minify HTML',
      type: 'object',
      properties: {
        collapseWhitespace: {
          description: 'Collapse whitespace',
          type: 'boolean',
          default: true,
        },
        collapseBooleanAttributes: {
          description: 'Collapse boolean attributes',
          type: 'boolean',
          default: true,
        },
        decodeEntities: {
          description: 'Decode HTML entities',
          type: 'boolean',
          default: true,
        },
        keepClosingSlash: {
          description: 'Keep closing slash',
          type: 'boolean',
          default: true,
        },
        sortAttributes: {
          description: 'Sort attributes',
          type: 'boolean',
          default: true,
        },
        sortClassName: {
          description: 'Sort class name',
          type: 'boolean',
          default: true,
        },
      },
    },
    viewport: {
      description: 'Viewport size',
      type: 'object',
      properties: {
        width: {
          description: 'Width',
          type: 'integer',
          default: 480,
        },
        height: {
          description: 'Height',
          type: 'integer',
          default: 850,
        },
      },
    },
    sourceMaps: {
      description: 'Source maps',
      type: 'boolean',
      default: true,
    },
    fixWebpackChunksIssue: {
      description: 'Fix webpack chunks issue',
      type: 'string',
      default: 'CRA1',
    },
    removeBlobs: {
      description: 'Remove blobs from the result',
      type: 'boolean',
      default: true,
    },
    fixInsertRule: {
      description: 'Fix insert rule',
      type: 'boolean',
      default: true,
    },
    skipThirdPartyRequests: {
      description: 'Skip third party requests',
      type: 'boolean',
      default: false,
    },
    cacheAjaxRequests: {
      description: 'Cache Ajax requests',
      type: 'boolean',
      default: false,
    },
    http2PushManifest: {
      description: 'HTTP/2 Push Manifest',
      type: 'boolean',
      default: false,
    },
    ignoreForPreload: {
      description: 'Ignore for preload',
      type: 'array',
      minItems: 1,
      additionalItems: true,
      items: {
        type: 'string',
        minLength: 1,
      },
    },
    preconnectThirdParty: {
      description: 'Preconnect third party',
      type: 'boolean',
      default: true,
    },
    inlineCss: {
      description: 'Inline CSS',
      type: 'boolean',
      default: false,
    },
    saveAs: {
      description: 'Save as',
      type: 'string',
      default: 'html',
    },
    crawl: {
      description: 'Crawl other links on the first page and all rest pages',
      type: 'boolean',
      default: false,
    },
    waitFor: {
      description: 'Wait for script to be fully executed',
      type: 'boolean',
      default: false,
    },
    externalServer: {
      description: 'External server',
      type: 'boolean',
      default: false,
    },
    removeStyleTags: {
      description: 'Remove style tags',
      type: 'boolean',
      default: false,
    },
    preloadImages: {
      description: 'Preload images',
      type: 'boolean',
      default: false,
    },
    asyncScriptTags: {
      description: 'Async script tags',
      type: 'boolean',
      default: false,
    },
    removeScriptTags: {
      description: 'Remove script tags',
      type: 'boolean',
      default: false,
    },
  },
};

module.exports = optionsSchema;
