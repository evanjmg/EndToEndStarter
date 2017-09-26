/**
 * @author: @Velocity
 */

require('ts-node/register');
var helpers = require('./helpers');

var browsers = {
  firefox: {
    name: 'Firefox',
    browserName: 'firefox',
    idleTimeout: 120
  },
  chrome: {
    name: 'Chrome',
    platform: 'macOS 10.12',
    browserName: 'chrome',
    tags: ['chrome'],
    seleniumVersion: '2.53.1',
    idleTimeout: 120,
    'time-zone': 'London'
  },
  safari: {
    name: 'Safari',
    browserName: 'safari',
    platform: 'macOS 10.12',
    tags: ['safari'],
    idleTimeout: 120,
    'time-zone': 'London'
  },
  ios9: {
    browserName: 'safari',
    platformName: 'iOS',
    platformVersion: '9.3',
    deviceName: 'iPhone Simulator'
  },
  ie8: {
    name: 'IE 8',
    browserName: 'internet explorer',
    version: '8.0',
    tags: ['ie']
  },
  ie9: {
    name: 'IE 9',
    browserName: 'internet explorer',
    version: '9.0',
    tags: ['ie']
  },
  ie10: {
    name: 'IE 10',
    browserName: 'internet explorer',
    version: '10.0',
    tags: ['ie']
  },
  ie11: {
    name: 'IE 11',
    browserName: 'internet explorer',
    version: '11.0',
    tags: ['ie'],
    idleTimeout: 120,
    'time-zone': 'London'
  }

};


exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    '../test/e2e/features/**/**.feature'
  ],
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false)

  },
  getPageTimeout: 100000,
  restartBrowserBetweenTests: false,
  cucumberOpts: {
    require: '../test/e2e/features/**/**.ts',
    format: 'pretty',
    compiler: "ts:ts-node/register"
  },
  baseUrl: 'http://localhost:8888'
};

if (process.argv[3] === '--chrome') {
  exports.config.capabilities = browsers.chrome;
}
else {
  exports.config.multiCapabilities = [
    browsers.chrome,
    browsers.safari
  ];
}
