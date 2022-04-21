import * as playwright from 'playwright';
import { LaunchBrowser } from './base';

export class PlaywrightLaunchBrowser implements LaunchBrowser {
    get name(): string {
        return 'playwright';
    }
    async firefox() {
        await playwright.firefox.launch();
    }
    async chrome() {
        await playwright.chromium.launch({
            channel: 'chrome'
        });
    }
    async webkit() {
        await playwright.webkit.launch();
    }
    async edge() {
        await playwright.chromium.launch({
            channel: 'msedge'
        });
    }
}