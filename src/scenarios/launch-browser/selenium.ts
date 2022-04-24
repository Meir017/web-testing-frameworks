import * as seleniumWebdriver  from 'selenium-webdriver';
const { Builder, Browser } = seleniumWebdriver;
import { LaunchBrowser } from './base';

import 'chromedriver';

export class SeleniumLaunchBrowser extends LaunchBrowser {
    get name(): string {
        return 'selenium';
    }
    async firefox() {
        const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        await driver.quit();
    }
    async chrome() {
        const driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.quit();
    }
    async webkit() {
        const driver = await new Builder().forBrowser(Browser.SAFARI).build();
        await driver.quit();
    }
    async edge() {
        const driver = await new Builder().forBrowser(Browser.EDGE).build();
        await driver.quit();
    }
}