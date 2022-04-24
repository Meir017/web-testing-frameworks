import * as seleniumWebdriver from 'selenium-webdriver';
const { Builder, Browser, By, until } = seleniumWebdriver;

export async function runWithChrome<T>(func: (driver: seleniumWebdriver.WebDriver) => Promise<T>) {
    await import('chromedriver');
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        return await func(driver);
    } finally {
        await driver.quit();
    }
}