import { PlaywrightSimple } from './playwright';
import { SeleniumSimple } from './selenium';
import { Simple } from './base';
import { getMethodsFromType } from '../../utils';

export const name = 'simple';
export const implementations = [
    new PlaywrightSimple(),
    new SeleniumSimple(),
];
export const methods = getMethodsFromType(Simple);