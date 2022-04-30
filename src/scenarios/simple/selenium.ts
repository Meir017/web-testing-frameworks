import * as seleniumWebdriver from 'selenium-webdriver';
const { Builder, Browser, By, until } = seleniumWebdriver;
import { Simple, FormSubmissionParameters } from './base';
import * as fs from 'fs';
import * as path from 'path';

import * as seleniumUtils from '../../utils/selenium';
const { runWithChrome } = seleniumUtils;

export class SeleniumSimple extends Simple {
    get name(): string {
        return 'selenium';
    }
    async screenshot(url: string, fileName: string) {
        return runWithChrome(async (driver) => {
            await driver.get(url);
            await driver.takeScreenshot().then(image => fs.promises.writeFile(fileName, image, 'base64'));
        });
    }
    async pageTitle(url: string) {
        return runWithChrome(async (driver) => {
            await driver.get(url);
            return await driver.getTitle();
        });
    }
    async click(url: string) {
        return runWithChrome(async (driver) => {
            await driver.get(url);
            await driver.findElement(By.id('button00')).then(element => element.click());
            await driver.findElement(By.id('button01')).then(element => element.click());
            await driver.wait(until.elementLocated(By.id('button02'))).then(element => element.click());
            await driver.wait(until.elementLocated(By.id('button03'))).then(element => element.click());
        });
    }
    async formSubmission(url: string, parameters: FormSubmissionParameters) {
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
    async waitForLoad(url: string) {
        return runWithChrome(async (driver) => {
            await driver.get(url);
        });
    }
    async waitForElement(url: string, expectedText: string) {
        return runWithChrome(async (driver) => {
            await driver.get(url);
            const element = await driver.wait(until.elementTextIs(driver.findElement(By.css('#status')), expectedText));
            return await element.getText();
        });
    }
}