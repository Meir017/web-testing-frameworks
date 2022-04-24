import * as playwright from 'playwright';
import { Simple } from './base';

export class PlaywrightSimple extends Simple {
    get name(): string {
        return 'playwright';
    }
    async screenshot() {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto('http://whatsmyuseragent.org/');
        await page.screenshot({ path: `example.png` });
    }

    async pageTitle() {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://testpages.herokuapp.com/styled/index.html');
        const title = await page.title();
    }
    async click() {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html');
        await page.click('#button00');
        await page.click('#button01');
        await page.click('#button02');
        await page.click('#button03');

    }
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
    async waitForLoad() {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/c/GitHub/videos'); // auto-waits for page load
    }
    async waitForElement() {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://testpages.herokuapp.com/styled/progress-bars-sync.html');
        const element = await page.locator('#status', { hasText: 'Stopped' }).elementHandle();
        const text = await element!.textContent();
    }
}