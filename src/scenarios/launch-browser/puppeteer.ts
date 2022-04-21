import * as puppeteer from 'puppeteer';
import { LaunchBrowser } from './base';

export class PuppeteerLaunchBrowser implements LaunchBrowser {
    get name(): string {
        return 'puppeteer';
    }
    async firefox() {
        await puppeteer.launch({
            product: 'firefox'
        });
    }
    async chrome() {
        await puppeteer.launch({
            channel: 'chrome'
        });
    }
    async webkit() {
        // Not Supported
    }
    async edge() {
        await puppeteer.launch({
            // no standard way to launch edge yes, see https://github.com/puppeteer/puppeteer/issues/8259
            executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
        });
    }
}