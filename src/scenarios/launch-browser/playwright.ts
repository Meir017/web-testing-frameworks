import * as playwright from 'playwright';
import { LaunchBrowser } from './base';

export class PlaywrightLaunchBrowser implements LaunchBrowser {
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