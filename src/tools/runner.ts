import { scenarios } from '../scenarios';
import * as os from 'os';

const implementations = new Set<string>();
scenarios.forEach(scenario => scenario.implementations.forEach(implementation => implementations.add(implementation.name)));

const scenarioMethods = [].concat(...scenarios.map(scenario => scenario.methods.map(method => `${scenario.name}:${method}`)));

const helpMessage = `Usage:
npx ts-node src/runner.ts <implementation> <scenario-method>

- implementation: on of
  - ${formatOptions(implementations)}
- scenario-method: one of 
  - ${formatOptions(scenarioMethods)}
`;

const implementationName = process.argv[2];
const scenarioMethod = process.argv[3];
const [scenarioName, methodName] = (scenarioMethod || '').split(':');

if (isInvalidInput()) {
    console.info(helpMessage);
    process.exit(1);
}

const scenarioFunction: () => Promise<void> = scenarios.find(scenario => scenario.name === scenarioName).implementations.find(implementation => implementation.name === implementationName)[methodName];

console.info(`Using: 
  implementation: ${implementationName}
  scenario: ${scenarioName}
  method: ${methodName}`);

scenarioFunction()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('scenario failed', err);
        process.exit(1);
    });

function isInvalidInput() {
    if (process.argv.length != 4) {
        return true;
    }

    if (!implementations.has(implementationName)) {
        console.error(`invalid implementation value: ${implementationName}`);
        return true;
    }

    if (!scenarioMethods.includes(scenarioMethod)) {
        console.error(`invalid scenario value: ${scenarioMethod}`);
        return true;
    }
}

function formatOptions(options) {
    return [...options].map(x => `"${x}"`).join(`${os.EOL}  - `);
}