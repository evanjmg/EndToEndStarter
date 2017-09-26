import './world'
import { promise, browser } from 'protractor'
import * as fs from "fs"
import {logout} from './globals/helpers'
function takeScreenshot(scenario) {
    browser.getCapabilities().then(function(caps){
        let browserName
        if (browserName = caps.get('browserName')) {
            browser.takeScreenshot().then(function (png) {
                var stream = fs.createWriteStream('./test/e2e/screenshots/' + scenario.getName().replace(' ', '_') + '_' + browserName + '.png')
                stream.write(new Buffer(png, 'base64'))
                stream.end()
            })
        }

  })
}

let hooks =  function () {
  this.setDefaultTimeout(60 * 1000000)
  this.After(function(scenario) {
    takeScreenshot(scenario)
    })
  this.After(function () {
    return logout()
  })
}
export = hooks
