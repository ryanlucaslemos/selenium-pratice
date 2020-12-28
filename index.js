const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

/**
 * To run it execute: node index
 */
async function clickingTest() {
  const driver = new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.google.com.br/');
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
    // await driver.close();
  } catch (e) {
    console.log(e);
  }
  // chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
}

clickingTest();