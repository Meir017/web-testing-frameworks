import * as launchBrowser from './launch-browser';
import * as simple from './simple';

import { Scenario } from './types';

export const scenarios: Scenario[] = [
    launchBrowser,
    simple,
]