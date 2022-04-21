import { PlaywrightLaunchBrowser } from './playwright';
import { SeleniumLaunchBrowser } from './selenium';
import { LaunchBrowser } from './base';
import { getMethodsFromType } from '../../utils';

export const name = 'launch-browser';
export const implementations = [
    new PlaywrightLaunchBrowser(),
    new SeleniumLaunchBrowser(),
];
export const methods = getMethodsFromType(LaunchBrowser);