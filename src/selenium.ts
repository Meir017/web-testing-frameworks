import { Builder, Browser } from 'selenium-webdriver';
import * as base from './scenarios';

export class SeleniumLaunchBrowserScenarios implements base.LaunchBrowserScenarios {
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