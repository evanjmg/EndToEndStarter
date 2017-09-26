import { promise, element, browser, ExpectedConditions, by } from 'protractor'
import { scrollElementIntoView } from './helpers'
import * as protractor from 'protractor'
import { expect } from '../world'

let elements: Function = function (): void {
  this.Then(/^There should be an element called "([^"]*)"$/, function (arg1: string): Chai.PromisedAssertion {
    return expect(element(by.css(arg1)).isDisplayed()).to.eventually.equal(true)
  })
  this.Given(/^Wait until "([^"]*)" appears/, function (arg1: string): any {
    const until = <any>protractor.ExpectedConditions
    return browser.wait(until.presenceOf(element(by.css(arg1))), 12000, 'Element taking too long to appear in the DOM')
  })
  this.Given(/^Click element with id, "([^"]*)"$/, function (arg1: string): promise.Promise<any> {
    return element(by.id(arg1)).click()
  })
  this.Given(/^Click element with css, "([^"]*)"$/, function (arg1: string): promise.Promise<any> {
    return element(by.css(arg1)).click()
  })
    this.Given(/^Scroll to "?([^"]*)"?$/, function (el: string): void {
    scrollElementIntoView(el)
  })
  this.Given(/^Click unclickable element with css, "([^"]*)"$/, function (arg: string): any {
    return browser.actions()
    .mouseDown(element(by.css(arg)))
    .mouseUp()
    .perform()
  })
  this.Given(/^Click random element in list with css, "([^"]*)"$/, async function (arg: string): promise.Promise<any> {
    return browser.executeScript(function (el: any) {
      var elements = document.querySelectorAll(el)
      elements[Math.floor(Math.random() * elements.length)].click()
    }, arg)
  })
  this.Given(/^Click element with text, "([^"]*)" and class, "([^"]*)"$/, function (arg1: string, arg2: string): promise.Promise<any> {
     return element(by.cssContainingText(arg2, arg1)).click()
  })
  this.Given(/^Click hidden element with css, "([^"]*)"$/, function(arg1: string): promise.Promise<any>  {
    return browser.executeScript(function (el: any) { document.querySelector(el).click() }, arg1)
  })
  this.Given(/^Submit Form$/, function (): promise.Promise<any> {
    return element(by.css('button[type=submit], .submit-btn')).click()
  })
  this.Given(/^I click on the first element with the class, "([^"]*)"$/, function (arg1: string): promise.Promise<any> {
    return element.all(by.css(arg1)).get(1).click()
  })
  this.Given(/^Click element with class, "([^"]*)"$/, function (arg1: string): promise.Promise<any> {
    return element(by.css(arg1)).click()
  })
}

export = elements
