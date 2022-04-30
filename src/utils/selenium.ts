import * as seleniumWebdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
const { Builder, Browser, By, until } = seleniumWebdriver;

export async function runWithChrome<T>(func: (driver: seleniumWebdriver.WebDriver) => Promise<T>) {
    // await import('chromedriver');
    const driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(new chrome.Options().headless())
        .build();
    try {
        return await func(driver);
    } finally {
        await driver.quit();
    }
}