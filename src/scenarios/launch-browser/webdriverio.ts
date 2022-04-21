import * as webdriverio from 'webdriverio';
const { remote } = webdriverio;
import { LaunchBrowser } from './base';

export class WebdriverioLaunchBrowser implements LaunchBrowser {
    get name(): string {
        return 'webdriverio';
    }
    async firefox() {
        await remote({
            capabilities: { browserName: 'firefox' }
        })
    }
    async chrome() {
        await remote({
            capabilities: { browserName: 'chrome' }
        })
    }
    async webkit() {
        await remote({
            capabilities: { browserName: 'safari' }
        })
    }
    async edge() {
        await remote({
            capabilities: { browserName: 'MicrosoftEdge' }
        })
    }
}