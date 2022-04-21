import * as puppeteer from 'puppeteer';
import { LaunchBrowser } from './base';

export class PuppeteerLaunchBrowser implements LaunchBrowser {
    get name(): string {
        return 'puppeteer';
    }
    async firefox() {
        const browser = await puppeteer.launch({
            product: 'firefox'
        });
        await browser.close();
    }
    async chrome() {
        const browser = await puppeteer.launch({
            channel: 'chrome'
        });
        await browser.close();
    }
    async webkit() {
        // Not Supported
    }
    async edge() {
        const browser = await puppeteer.launch({
            // no standard way to launch edge yet, see https://github.com/puppeteer/puppeteer/issues/8259
            executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
        });
        await browser.close();
    }
}