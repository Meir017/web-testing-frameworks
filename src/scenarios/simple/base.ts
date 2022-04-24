import { LoggerBase } from '../../logger-base';

export class Simple extends LoggerBase {
    get name(): string {
        throw new Error('Not implemented');
    }
    async screenshot() {
        throw new Error('Not implemented');
    }
    async pageTitle() {
        throw new Error('Not implemented');
    }
    async click() {
        throw new Error('Not implemented');
    }
    async formSubmission() {
        throw new Error('Not implemented');
    }
    async waitForLoad() {
        throw new Error('Not implemented');
    }
    async waitForElement() {
        throw new Error('Not implemented');
    }
}