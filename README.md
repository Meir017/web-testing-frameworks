# web-testing-frameworks
Comparing common scenarios using popular web testing frameworks
## launch-browser
Launching new instance of a web browser
### firefox
#### playwright
```ts
async firefox() {
    const browser = await playwright.firefox.launch();
    await browser.close();
}
```
#### puppeteer
```ts
async firefox() {
    const browser = await puppeteer.launch({
        product: 'firefox'
    });
    await browser.close();
}
```
#### selenium
```ts
async firefox() {
    const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.quit();
}
```
#### webdriverio
```ts
async firefox() {
    const browser = await remote({
        capabilities: { browserName: 'firefox' }
    });
    await browser.deleteSession();
}
```
---
### chrome
#### playwright
```ts
async chrome() {
    const browser = await playwright.chromium.launch({
        channel: 'chrome'
    });
    await browser.close();
}
```
#### puppeteer
```ts
async chrome() {
    const browser = await puppeteer.launch({
        channel: 'chrome'
    });
    await browser.close();
}
```
#### selenium
```ts
async chrome() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.quit();
}
```
#### webdriverio
```ts
async chrome() {
    const browser = await remote({
        capabilities: { browserName: 'chrome' }
    });
    await browser.deleteSession();
}
```
---
### webkit
#### playwright
```ts
async webkit() {
    const browser = await playwright.webkit.launch();
    await browser.close();
}
```
#### puppeteer
```ts
async webkit() {
    // Not Supported
}
```
#### selenium
```ts
async webkit() {
    const driver = await new Builder().forBrowser(Browser.SAFARI).build();
    await driver.quit();
}
```
#### webdriverio
```ts
async webkit() {
    const browser = await remote({
        capabilities: { browserName: 'safari' }
    });
    await browser.deleteSession();
}
```
---
### edge
#### playwright
```ts
async edge() {
    const browser = await playwright.chromium.launch({
        channel: 'msedge'
    });
    await browser.close();
}
```
#### puppeteer
```ts
async edge() {
    const browser = await puppeteer.launch({
        // no standard way to launch edge yet, see https://github.com/puppeteer/puppeteer/issues/8259
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    });
    await browser.close();
}
```
#### selenium
```ts
async edge() {
    const driver = await new Builder().forBrowser(Browser.EDGE).build();
    await driver.quit();
}
```
#### webdriverio
```ts
async edge() {
    const browser = await remote({
        capabilities: { browserName: 'MicrosoftEdge' }
    });
    await browser.deleteSession();
}
```
---
---
## simple
Simple scenarios of browser automation
### screenshot
#### playwright
```ts
async screenshot() {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://whatsmyuseragent.org/');
    await page.screenshot({ path: `example.png` });
}
```
#### selenium
```ts
async screenshot() {
    const driver = new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://whatsmyuseragent.org/');
    await driver.takeScreenshot().then(image => fs_1.default.promises.writeFile('example.png', image, 'base64'));
}
```
---
### pageTitle
#### playwright
```ts
async pageTitle() {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://testpages.herokuapp.com/styled/index.html');
    const title = await page.title();
}
```
#### selenium
```ts
async pageTitle() {
    const driver = new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://testpages.herokuapp.com/styled/index.html');
    const title = await driver.getTitle();
}
```
---
### click
#### playwright
```ts
async click() {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html');
    await page.click('#button00');
    await page.click('#button01');
    await page.click('#button02');
    await page.click('#button03');
}
```
#### selenium
```ts
async click() {
    const driver = new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html');
    await driver.findElement(By.id('button00')).then(element => element.click());
    await driver.findElement(By.id('button01')).then(element => element.click());
    await driver.wait(until.elementLocated(By.id('button02'))).then(element => element.click());
    await driver.wait(until.elementLocated(By.id('button03'))).then(element => element.click());
}
```
---
### formSubmission
#### playwright
```ts
async formSubmission() {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
    await page.type('[name="username"]', 'John Doe');
    await page.type('[name="password"]', '123456');
    await page.type('[name="comments"]', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    await page.setInputFiles('[name="filename"]', './file1.txt');
    await page.uncheck('[name="checkboxes[]"][value=cb3]');
    await page.check('[name="checkboxes[]"][value=cb2]');
    await page.check('[name="radioval"][value=rd1]');
    await page.selectOption('[name="multipleselect[]"]', ['ms2', 'ms3']);
    await page.selectOption('[name="dropdown"]', 'dd5');
    await page.click('input[value="submit"]');
}
```
#### selenium
```ts
async formSubmission() {
    const driver = new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
    await driver.findElement(By.name('username')).then(element => element.sendKeys('John Doe'));
    await driver.findElement(By.name('password')).then(element => element.sendKeys('123456'));
    await driver.findElement(By.name('comments')).then(element => element.sendKeys('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
    await driver.findElement(By.name('filename')).then(element => element.sendKeys(path_1.default.resolve("./file.txt")));
    await driver.findElement(By.css('[name="checkboxes[]"][value=cb2]')).then(element => element.click());
    await driver.findElement(By.css('[name="checkboxes[]"][value=cb3]')).then(element => element.click());
    await driver.findElement(By.css('[name="radioval"][value=rd1]')).then(element => element.click());
    for (const option of await driver.findElements(By.css('[name="multipleselect[]"] > option'))) {
        const isSelected = await option.isSelected();
        const value = await option.getAttribute('value');
        if ((['ms2', 'ms3'].includes(value) && !isSelected)
            || (!['ms2', 'ms3'].includes(value) && isSelected)) {
            await option.click();
        }
    }
    await driver.findElement(By.css('input[value="submit"]')).then(element => element.submit());
}
```
---
### waitForLoad
#### playwright
```ts
async waitForLoad() {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.youtube.com/c/GitHub/videos'); // auto-waits for page load
}
```
#### selenium
```ts
async waitForLoad() {
    const driver = new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.youtube.com/c/GitHub/videos');
}
```
---
### waitForElement
#### playwright
```ts
async waitForElement() {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://testpages.herokuapp.com/styled/progress-bars-sync.html');
    const element = await page.locator('#status', { hasText: 'Stopped' }).elementHandle();
    const text = await element.textContent();
}
```
#### selenium
```ts
async waitForElement() {
    const driver = new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://testpages.herokuapp.com/styled/progress-bars-sync.html');
    const element = await driver.wait(until.elementTextIs(driver.findElement(By.css('#status')), 'Stopped'));
    const text = await element.getText();
}
```
---
---