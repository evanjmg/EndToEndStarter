import { promise, element, browser, by } from 'protractor'
import { expect } from '../world'
let input = function (): void {
 this.Then(/^Type "([^"]*)" into "([^"]*)"$/ , function(arg1: string, arg2: string): promise.Promise<any> {
     return (<any>element(by.css('input[name=' + arg2 + ']')).clear()).sendKeys(arg1)
  })
  this.Then(/^Type "([^"]*)" into textarea, "([^"]*)"$/ , function(arg1: string, arg2: string): promise.Promise<any> {
     return (<any>element(by.css('textarea[name=' + arg2 + ']')).clear()).sendKeys(arg1)
  })

}
export = input
