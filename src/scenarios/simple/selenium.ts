import * as seleniumWebdriver from 'selenium-webdriver';
const { Builder, Browser, By, until } = seleniumWebdriver;
import { Simple } from './base';
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
    async formSubmission(url: string) {
        return runWithChrome(async (driver) => {
            await driver.get(url);
            await driver.findElement(By.name('username')).then(element => element.sendKeys('John Doe'));
            await driver.findElement(By.name('password')).then(element => element.sendKeys('123456'));
            await driver.findElement(By.name('comments')).then(element => element.sendKeys('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
            await driver.findElement(By.name('filename')).then(element => element.sendKeys(path.resolve("./file.txt")));
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