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

export class LaunchBrowserRunner { 
    constructor(private readonly launchBrowser: LaunchBrowser) {
    }

    get name(): string {
        return this.launchBrowser.name;
    }

    async firefox() {
        await this.launchBrowser.firefox();
    }
    async chrome() {
        await this.launchBrowser.chrome();
    }
    async webkit() {
        await this.launchBrowser.webkit();
    }
    async edge() {
        await this.launchBrowser.edge();
    }
}