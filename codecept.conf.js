exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.zwift.com',
      show: true,
      waitForNavigation: [ "domcontentloaded", "networkidle0"],
      waitForTimeout: 20000,
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'zwift-ersin'
}