import { promise, browser } from 'protractor'
import { expect} from '../world'

let visitHome = function (): void {
  this.Given(/^I am on the homepage$/, function (): promise.Promise<any> {
        return browser.get('/')
  })
}

export = visitHome
