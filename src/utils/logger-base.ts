export class LoggerBase {

    private loggerName: string;

    constructor(private readonly logger: Logger = console) {
        this.loggerName = this.constructor.name;
    }

    public info(message: string, ...args: any[]): void {
        this.logger.info(`${this.loggerName}: ${message}`, ...args);
    }

    public warn(message: string, ...args: any[]): void {
        this.logger.warn(`${this.loggerName}: ${message}`, ...args);
    }

    public error(message: string, ...args: any[]): void {
        this.logger.error(`${this.loggerName}: ${message}`, ...args);
    }

    protected formatMessage(level: 'info' | 'warn' | 'error', message: string, ...args: any[]): string {
        return `[${this.loggerName}]: ${new Date().toJSON()} ${level}: ${message}`;
    }
}

export interface Logger {
    info(message: string, ...args: any[]): void;
    warn(message: string, ...args: any[]): void;
    error(message: string, ...args: any[]): void;
}