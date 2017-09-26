
import '../world'
import { browser, promise } from 'protractor'
export function waitForPromiseTest(promiseFn: Function, testFn: Function): promise.Promise<any> {
  return browser.wait(function (): promise.Promise<any> {
    let deferred = promise.defer()
    promiseFn().then(function (data: any): void {
      deferred.fulfill(testFn(data))
    })
    return deferred.promise
  })
}
export function logout(): promise.Promise<any> {
  return browser.manage().deleteAllCookies()
}
export function scrollElementIntoView(el: string): promise.Promise<any> {
  return browser.executeScript(function (el) {
    document.querySelector(el).scrollIntoView()
  }, el)
}

export function urlChangedToContains (urlPortion) {
  return function () {
    return browser.getCurrentUrl().then(function(actualUrl) {
      return actualUrl.includes(urlPortion)
    })
  }
}