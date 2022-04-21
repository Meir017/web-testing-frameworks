import { scenarios } from '../scenarios';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

const builder = [
    '# web-testing-frameworks',
    'Comparing common scenarios using popular web testing frameworks',
];

for (const scenario of scenarios) {
    builder.push(`## ${scenario.name}`);
    builder.push(`${scenario.description}`);

    for (const method of scenario.methods) {
        builder.push(`### ${method}`);

        for (const implementation of scenario.implementations) {
            builder.push(`#### ${implementation.name}`);
            builder.push('```ts');
            builder.push(`${implementation[method].toString()}`);
            builder.push('```');
        }
        
        builder.push(`---`);
    }

    builder.push(`---`);
}

fs.writeFileSync(path.resolve('README.md'), builder.join(os.EOL));