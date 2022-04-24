import { PlaywrightSimple } from './playwright';
import { SeleniumSimple } from './selenium';
import { Simple, SimpleRunner } from './base';
import { getMethodsFromType } from '../../utils';

export const name = 'simple';
export const description = 'Simple scenarios of browser automation';
export const implementations = [
    new PlaywrightSimple(),
    new SeleniumSimple(),
];
export const methods = getMethodsFromType(Simple);
export const runner = SimpleRunner;