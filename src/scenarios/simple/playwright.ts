import * as playwright from 'playwright';
import { Simple, FormSubmissionParameters } from './base';


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
    async formSubmission(url: string, parameters: FormSubmissionParameters) {
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
    async waitForElement(url: string, expectedText: string) {
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const element = await page.locator('#status', { hasText: expectedText }).elementHandle();
        return await element!.textContent();
    }
}