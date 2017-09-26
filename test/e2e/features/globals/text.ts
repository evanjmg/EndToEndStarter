import { promise, element, by } from 'protractor'
import { expect } from '../world'

let text = function (): void {
  this.Then(/^I should see the message: "([^"]*)"$/, function(arg1: string): Chai.PromisedAssertion {
    return expect(element(by.css('body')).getText()).to.eventually.include(arg1)
  })
  this.Then(/^I should see the text "([^"]*)", on element with css: "([^"]*)"$/, function(arg1: string, arg2: string): Chai.PromisedAssertion {
    return expect(element(by.css(arg2)).getText()).to.eventually.include(arg1)
  })
  this.Then(/^I should have at least "([^"]*)" characters in element: "([^"]*)"$/, async function(arg1: string, arg2: string): promise.Promise<any> {
    const text = await element(by.css(arg2)).getText()
    return expect(text.length).to.be.at.least(parseInt(arg1, 10))
  })
  this.Then(/^Text of "([^"]*)" and "([^"]*)" should match$/, async function (arg1: string, arg2: string): promise.Promise<any> {
    const textOne = await element(by.css(arg1)).getText()
    const textTwo = await element(by.css(arg2)).getText()
    return expect(textOne).to.equal(textTwo)
  })
  this.Then(/^Text of "([^"]*)" should include text of "([^"]*)"$/, async function (arg1: string, arg2: string): promise.Promise<any> {
    const textOne = await element(by.css(arg1)).getText()
    const textTwo = await element(by.css(arg2)).getText()
    return expect(textOne).to.include(textTwo)
  })
  this.Then(/^I should see the value "([^"]*)", on element with css: "([^"]*)"$/, function (arg1: string, arg2: string): Chai.PromisedAssertion {
    return expect(element(by.css(arg2)).getAttribute('value')).to.eventually.equal(arg1)
  })
}
export = text
