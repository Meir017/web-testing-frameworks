import * as seleniumWebdriver  from 'selenium-webdriver';
const { Builder, Browser } = seleniumWebdriver;
import { LaunchBrowser } from './base';

export class SeleniumLaunchBrowser implements LaunchBrowser {
    get name(): string {
        return 'selenium';
    }
    async firefox() {
        await new Builder().forBrowser(Browser.FIREFOX).build();
    }
    async chrome() {
        await new Builder().forBrowser(Browser.CHROME).build();
    }
    async webkit() {
        await new Builder().forBrowser(Browser.SAFARI).build();
    }
    async edge() {
        await new Builder().forBrowser(Browser.EDGE).build();
    }
}