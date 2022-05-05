import { LoggerBase } from '../../utils/logger-base';

export interface FormSubmissionParameters {
    username: string;
    password: string;
    comments: string;
    filename: string;
    checkCheckbox: string;
    uncheckCheckbox: string;
    radioButton: string;
    multipleSelect: string[];
    dropdown: string;
}

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
    async formSubmission(url: string, parameters: FormSubmissionParameters) {
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
        return this.simple.formSubmission(url, {
            username: 'John Doe',
            password: '123456',
            comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            filename: './package.json',
            checkCheckbox: 'cb3',
            uncheckCheckbox: 'cb2',
            radioButton: 'rd1',
            multipleSelect: ['ms2', 'ms3'],
            dropdown: 'dd5'
        });
    }
    async waitForElement() {
        const url = 'https://testpages.herokuapp.com/styled/progress-bars-sync.html';
        const expectedText = 'Stopped';
        return this.simple.waitForElement(url, expectedText);
    }
}