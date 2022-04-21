import { PlaywrightLaunchBrowser } from './playwright';
import { SeleniumLaunchBrowser } from './selenium';
import { LaunchBrowser } from './base';
import { getMethodsFromType } from '../../utils';

export const name = 'launch-browser';
export const description = 'Launching new instance of a web browser';
export const implementations = [
    new PlaywrightLaunchBrowser(),
    new SeleniumLaunchBrowser(),
];
export const methods = getMethodsFromType(LaunchBrowser);