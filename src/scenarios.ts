export interface Scenarios {
    launchBrowser: LaunchBrowserScenarios;
    simple: SimpleScenarios;
}

export interface LaunchBrowserScenarios {
    firefox(): Promise<void>;
    chrome(): Promise<void>;
    webkit(): Promise<void>;
    edge(): Promise<void>;
}

export interface SimpleScenarios {
    screenshot(): Promise<void>;
    pageTitle(): Promise<void>;
    click(): Promise<void>;
    formSubmission(): Promise<void>;
    waitForLoad(): Promise<void>;
    waitForElement(): Promise<void>;
}