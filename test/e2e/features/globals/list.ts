import { promise, element, browser, by } from 'protractor'
import { expect } from '../world'
const list = function () {
  this.Then(/^I should see at least "([^"]*)" of "([^"]*)"$/, function (arg1: string, arg2: string): Chai.PromisedAssertion {
    const length = parseInt(arg1, 10)
    return expect(element.all(by.css(arg2)).count()).to.eventually.be.at.least(length)
  })
}
export = list