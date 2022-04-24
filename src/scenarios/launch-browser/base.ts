import { LoggerBase } from '../../logger-base';

export class LaunchBrowser extends LoggerBase {
    get name(): string {
        throw new Error('Not implemented');
    }
    async firefox() {
        throw new Error('Not implemented');
    }
    async chrome() {
        throw new Error('Not implemented');
    }
    async webkit() {
        throw new Error('Not implemented');
    }
    async edge() {
        throw new Error('Not implemented');
    }
}