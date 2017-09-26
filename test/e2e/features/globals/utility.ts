import { expect } from '../world'
import { cachedValues } from './mockData'
import { urlChangedToContains } from './helpers'
import { promise, element, by, browser, ExpectedConditions } from 'protractor'
let utility = function(): void {
  this.Given(/^I wait "?([^"]*)"? seconds$/, function(time: string, callback: Function): void {
    browser.sleep(parseInt(time, 10) * 1000).then(function(): any {
      callback()
    })
  })
  this.Given(/^I am on the page: "([^"]*)"$/, function(url: string): promise.Promise < any > {
    return browser.get(url)
  })

  this.Then(/The url is equal to "([^"]*)"/, function(arg: string): Chai.PromisedAssertion {
    return expect(browser.getCurrentUrl()).to.eventually.equal(arg)
  })
  this.Then(/The url changed contains "([^"]*)"/, function (arg: string): promise.Promise <any> {
    return browser.wait(urlChangedToContains(arg), 5000)
  })
  this.Then(/The url contains "([^"]*)"/, function(arg: string, callback: Function): void {
    expect(browser.getCurrentUrl()).to.eventually.contain(arg).and.notify(callback)
  })
  this.Then(/Site title is "([^"]*)"/, function(arg: string): Chai.PromisedAssertion {
    return expect(browser.getTitle()).to.eventually.equal(arg)
  })
  this.Given(/^Scroll bottom/, function () {
     return browser.executeScript(function () { window.scrollTo(0, document.body.scrollHeight) })
  })
  this.Given(/^Scroll top/, function () {
     return browser.executeScript(function () { window.scrollTo(0, 0) })
  })
  this.Given(/^Target last window opened$/, async function (): promise.Promise<any> {
    const windows = await browser.getAllWindowHandles()
    const lastWindow = windows[windows.length - 1]
    return browser.switchTo().window(lastWindow)
  })
  this.Given(/I am Logged In$/, function(): promise.Promise<any> {
    return browser.executeScript(function (el) {
      window.localStorage.setItem(el.name, JSON.stringify(el.state))
      window.location.href = window.location.href
    }, { name: 'session', state: cachedValues.session })
  })
}
export = utility
