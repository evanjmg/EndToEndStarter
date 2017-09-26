// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
exports.config = {
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['./explorer-setup.js'],
  onPrepare: function() {
    browser.waitForAngularEnabled(false)
    browser.driver.ignoreSynchronization = true
  }
};

