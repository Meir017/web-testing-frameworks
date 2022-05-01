# web-testing-frameworks
Comparing common scenarios using popular web testing frameworks

- [launch-browser.firefox](#firefox)
- [launch-browser.chrome](#chrome)
- [launch-browser.webkit](#webkit)
- [launch-browser.edge](#edge)
- [simple.screenshot](#screenshot)
- [simple.pageTitle](#pagetitle)
- [simple.click](#click)
- [simple.formSubmission](#formsubmission)
- [simple.waitForElement](#waitforelement)
---
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
    const driver = await new Builder()
        .forBrowser(Browser.FIREFOX)
        .setFirefoxOptions(new firefox.Options().headless())
        .build();
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
    const driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(new chrome.Options().headless())
        .build();
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
    const driver = await new Builder()
        .forBrowser(Browser.SAFARI)
        .setSafariOptions(new safari.Options())
        .build();
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
async screenshot(url, fileName) {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: fileName });
}
```
#### selenium
```ts
async screenshot(url, fileName) {
    return runWithChrome(async (driver) => {
        await driver.get(url);
        await driver.takeScreenshot().then(image => fs.promises.writeFile(fileName, image, 'base64'));
    });
}
```
---
### pageTitle
#### playwright
```ts
async pageTitle(url) {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    return await page.title();
}
```
#### selenium
```ts
async pageTitle(url) {
    return runWithChrome(async (driver) => {
        await driver.get(url);
        return await driver.getTitle();
    });
}
```
---
### click
#### playwright
```ts
async click(url) {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.click('#button00');
    await page.click('#button01');
    await page.click('#button02');
    await page.click('#button03');
}
```
#### selenium
```ts
async click(url) {
    return runWithChrome(async (driver) => {
        await driver.get(url);
        await driver.findElement(By.id('button00')).then(element => element.click());
        await driver.findElement(By.id('button01')).then(element => element.click());
        await driver.wait(until.elementLocated(By.id('button02'))).then(element => element.click());
        await driver.wait(until.elementLocated(By.id('button03'))).then(element => element.click());
    });
}
```
---
### formSubmission
#### playwright
```ts
async formSubmission(url, parameters) {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('[name="username"]', parameters.username);
    await page.type('[name="password"]', parameters.password);
    await page.type('[name="comments"]', parameters.comments);
    await page.setInputFiles('[name="filename"]', parameters.filename);
    await page.uncheck(`[name="checkboxes[]"][value=${parameters.uncheckCheckbox}]`);
    await page.check(`[name="checkboxes[]"][value=${parameters.checkCheckbox}]`);
    await page.check(`[name="radioval"][value=${parameters.radioButton}]`);
    await page.selectOption('[name="multipleselect[]"]', parameters.multipleSelect);
    await page.selectOption('[name="dropdown"]', parameters.dropdown);
    await page.click('input[value="submit"]');
}
```
#### selenium
```ts
async formSubmission(url, parameters) {
    return runWithChrome(async (driver) => {
        await driver.get(url);
        await driver.findElement(By.name('username')).then(element => element.sendKeys(parameters.username));
        await driver.findElement(By.name('password')).then(element => element.sendKeys(parameters.password));
        await driver.findElement(By.name('comments')).then(element => element.sendKeys(parameters.comments));
        await driver.findElement(By.name('filename')).then(element => element.sendKeys(path.resolve(parameters.filename)));
        await driver.findElement(By.css(`[name="checkboxes[]"][value=${parameters.uncheckCheckbox}]`)).then(element => element.click());
        await driver.findElement(By.css(`[name="checkboxes[]"][value=${parameters.checkCheckbox}]`)).then(element => element.click());
        await driver.findElement(By.css(`[name="radioval"][value=${parameters.radioButton}]`)).then(element => element.click());
        for (const option of await driver.findElements(By.css('[name="multipleselect[]"] > option'))) {
            const isSelected = await option.isSelected();
            const value = await option.getAttribute('value');
            if ((parameters.multipleSelect.includes(value) && !isSelected)
                || (!parameters.multipleSelect.includes(value) && isSelected)) {
                await option.click();
            }
        }
        await driver.findElement(By.css('input[value="submit"]')).then(element => element.submit());
    });
}
```
---
### waitForElement
#### playwright
```ts
async waitForElement(url, expectedText) {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const element = await page.locator('#status', { hasText: expectedText }).elementHandle();
    return await element.textContent();
}
```
#### selenium
```ts
async waitForElement(url, expectedText) {
    return runWithChrome(async (driver) => {
        await driver.get(url);
        const element = await driver.wait(until.elementTextIs(driver.findElement(By.css('#status')), expectedText));
        return await element.getText();
    });
}
```
---
---