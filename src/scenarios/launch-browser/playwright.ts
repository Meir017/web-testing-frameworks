import * as playwright from 'playwright';
import { LaunchBrowser } from './base';

export class PlaywrightLaunchBrowser extends LaunchBrowser {
    get name(): string {
        return 'playwright';
    }
    async firefox() {
        const browser = await playwright.firefox.launch();
        await browser.close();
    }
    async chrome() {
        const browser = await playwright.chromium.launch({
            channel: 'chrome'
        });
        await browser.close();
    }
    async webkit() {
        const browser = await playwright.webkit.launch();
        await browser.close();
    }
    async edge() {
        const browser = await playwright.chromium.launch({
            channel: 'msedge'
        });
        await browser.close();
    }
}