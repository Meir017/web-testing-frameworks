import * as seleniumWebdriver  from 'selenium-webdriver';
const { Builder, Browser } = seleniumWebdriver;
import { LaunchBrowser } from './base';
import * as firefox from 'selenium-webdriver/firefox';
import * as chrome from 'selenium-webdriver/chrome';
import * as safari from 'selenium-webdriver/safari'

import 'chromedriver';

export class SeleniumLaunchBrowser extends LaunchBrowser {
    get name(): string {
        return 'selenium';
    }
    async firefox() {
        const driver = await new Builder()
            .forBrowser(Browser.FIREFOX)
            .setFirefoxOptions(new firefox.Options().headless())
            .build();
        await driver.quit();
    }
    async chrome() {
        const driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(new chrome.Options().headless())
            .build();
        await driver.quit();
    }
    async webkit() {
        const driver = await new Builder()
            .forBrowser(Browser.SAFARI)
            .setSafariOptions(new safari.Options())
            .build();
        await driver.quit();
    }
    async edge() {
        const driver = await new Builder().forBrowser(Browser.EDGE).build();
        await driver.quit();
    }
}