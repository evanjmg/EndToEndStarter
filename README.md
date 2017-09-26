# End to End Cucumber & Typescript Starter
😎 The ultimate end to end starter 😎

For more information on this repo, read the following blog post:
Install Dependencies (NodeJS)
`npm i`


Java is needed to run selenium end to end tests. Install Java (if you don't have it) and Chrome Selenium Webdriver (needed for End to End tests)
`brew update;
brew cask install java; npm run pree2e`

Launch your dev server
`npm run watch`

Run your cucumber end to end tests
`npm run test:e2e`

Run your cucumber tests with @include tag
`npm run test:e2e:specific`

Debug your app with protractor
`npm run debug:e2e`

Useful Debugging techniques:
https://github.com/angular/protractor/blob/master/docs/debugging.md

Some really great UI examples to play around with
Drag and Drop: https://bl.ocks.org/evanjmg/c2ffda2df9748e56425194eb5e6ea878

# Browser support
- For Safari, you need to go to the develop tab in the menu and click 'Allow Remote Automation'
- Firefox has issues - https://github.com/angular/protractor/issues/4501

## Have you never used typescript?
If so, that's completely fine! We don't expect you know all of it right away. First thing to do is skim the docs (https://www.typescriptlang.org/docs/handbook/basic-types.html) and become more familiar with the language and just give it try.