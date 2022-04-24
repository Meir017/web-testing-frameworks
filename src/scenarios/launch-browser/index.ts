import { PlaywrightLaunchBrowser } from './playwright';
import { SeleniumLaunchBrowser } from './selenium';
import { PuppeteerLaunchBrowser } from './puppeteer';
import { WebdriverioLaunchBrowser } from './webdriverio';
import { LaunchBrowser, LaunchBrowserRunner } from './base';
import { getMethodsFromType } from '../../utils';

export const name = 'launch-browser';
export const description = 'Launching new instance of a web browser';
export const implementations = [
    new PlaywrightLaunchBrowser(),
    new PuppeteerLaunchBrowser(),
    new SeleniumLaunchBrowser(),
    new WebdriverioLaunchBrowser(),
];
export const methods = getMethodsFromType(LaunchBrowser);
export const runner = LaunchBrowserRunner;