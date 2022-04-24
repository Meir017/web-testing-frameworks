import { LoggerBase } from '../../utils/logger-base';

export class Simple extends LoggerBase {
    get name(): string {
        throw new Error('Not implemented');
    }
    async screenshot(url: string, fileName: string) {
        throw new Error('Not implemented');
    }
    async pageTitle(url: string): Promise<string> {
        throw new Error('Not implemented');
    }
    async click(url: string) {
        throw new Error('Not implemented');
    }
    async formSubmission(url: string) {
        throw new Error('Not implemented');
    }
    async waitForLoad(url: string) {
        throw new Error('Not implemented');
    }
    async waitForElement(url: string, expectedText: string): Promise<string> {
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
        const url = 'https://testpages.herokuapp.com/styled/index.html';
        return this.simple.pageTitle(url);
    }
    async click() {
        const url = 'https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html';
        return this.simple.click(url);
    }
    async formSubmission() {
        const url = 'https://testpages.herokuapp.com/styled/basic-html-form-test.html';
        return this.simple.formSubmission(url);
    }
    async waitForLoad() {
        const url = 'https://www.youtube.com/c/GitHub/videos';
        return this.simple.waitForLoad(url);
    }
    async waitForElement() {
        const url = 'https://testpages.herokuapp.com/styled/progress-bars-sync.html';
        const expectedText = 'Stopped';
        return this.simple.waitForElement(url, expectedText);
    }
}