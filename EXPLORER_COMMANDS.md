Paste these into explorer one by one

 ```
 // make non-angular compatible
browser.ignoreSynchronization = true
browser.get('https://bl.ocks.org/evanjmg/raw/c2ffda2df9748e56425194eb5e6ea878/73d2cee03e1f8aedbc9127f0fa429fea7f1a171e/')

// create square
 browser.driver.actions().mouseDown(element(by.css('.rectButton'))).mouseUp().mouseMove({ x: 300, y: 100 }).mouseDown().perform()

 // move the square (400 is the x value in the graph - varies on load)
 browser.driver.actions().mouseDown(element(by.css('.table-graphic[x="400"]'))).mouseMove({ x: 300, y: 100 }).mouseUp().perform()

 ```
