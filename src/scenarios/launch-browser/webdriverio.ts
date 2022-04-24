import * as webdriverio from 'webdriverio';
const { remote } = webdriverio;
import { LaunchBrowser } from './base';

export class WebdriverioLaunchBrowser extends LaunchBrowser {
    get name(): string {
        return 'webdriverio';
    }
    async firefox() {
        const browser = await remote({
            capabilities: { browserName: 'firefox' }
        });
        await browser.deleteSession();
    }
    async chrome() {
        const browser = await remote({
            capabilities: { browserName: 'chrome' }
        });
        await browser.deleteSession();
    }
    async webkit() {
        const browser = await remote({
            capabilities: { browserName: 'safari' }
        });
        await browser.deleteSession();
    }
    async edge() {
        const browser = await remote({
            capabilities: { browserName: 'MicrosoftEdge' }
        });
        await browser.deleteSession();
    }
}