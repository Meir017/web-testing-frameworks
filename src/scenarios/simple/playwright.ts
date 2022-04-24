import * as playwright from 'playwright';
import { Simple } from './base';

export class PlaywrightSimple extends Simple {
    get name(): string {
        return 'playwright';
    }
    async screenshot(url: string, fileName: string) {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.screenshot({ path: fileName });
    }

    async pageTitle(url: string) {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto(url);
        return await page.title();
    }
    async click(url: string) {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.click('#button00');
        await page.click('#button01');
        await page.click('#button02');
        await page.click('#button03');

    }
    async formSubmission(url: string) {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto(url);
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
    async waitForLoad(url: string) {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto(url);
    }
    async waitForElement(url: string, expectedText: string) {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const element = await page.locator('#status', { hasText: expectedText }).elementHandle();
        return await element!.textContent();
    }
}