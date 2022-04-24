import { LoggerBase } from '../../logger-base';

export class Simple extends LoggerBase {
    get name(): string {
        throw new Error('Not implemented');
    }
    async screenshot(url: string, fileName: string) {
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

export class SimpleRunner {
    constructor(private readonly simple: Simple) {
    }

    get name(): string {
        return this.simple.name;
    }

    async screenshot() {
        const url = 'http://whatsmyuseragent.org/';
        const fileName = 'example.png';
        return this.simple.screenshot(url, fileName);
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