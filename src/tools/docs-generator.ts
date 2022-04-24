import { scenarios } from '../scenarios';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

const builder = [
    '# web-testing-frameworks',
    'Comparing common scenarios using popular web testing frameworks',
    '',
];

const toc = [];
const scenariosExamples = [];

for (const scenario of scenarios) {
    scenariosExamples.push(`## ${scenario.name}`);
    scenariosExamples.push(`${scenario.description}`);

    for (const method of scenario.methods) {
        scenariosExamples.push(`### ${method}`);

        toc.push(`- [${scenario.name}.${method}](#${method.toLowerCase()})`);

        for (const implementation of scenario.implementations) {
            scenariosExamples.push(`#### ${implementation.name}`);
            scenariosExamples.push('```ts');
            const functionLines = implementation[method].toString().split(os.EOL);
            for (let i = 1; i < functionLines.length; i++) {
                functionLines[i] = functionLines[i].substring(4);
                
            }
            scenariosExamples.push(functionLines.join(os.EOL));
            scenariosExamples.push('```');
        }
        
        scenariosExamples.push(`---`);
    }

    scenariosExamples.push(`---`);
}

builder.push(...toc);
builder.push(`---`);
builder.push(...scenariosExamples);

fs.writeFileSync(path.resolve('README.md'), builder.join(os.EOL));