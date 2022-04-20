export interface LaunchBrowserScenarios {
    firefox(): Promise<void>;
    chrome(): Promise<void>;
    webkit(): Promise<void>;
    edge(): Promise<void>;
}

export interface SimpleScenarios {
    screenshot(): Promise<void>;
    navigation(): Promise<void>;
    click(): Promise<void>;
    type(): Promise<void>;
    waitForLoad(): Promise<void>;
    waitForElement(): Promise<void>;
}