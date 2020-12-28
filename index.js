const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

/**
 * Para rodar o teste execute-o via: node index
 */
async function clickingTest() {
  const driver = new Builder().forBrowser('chrome').build();

  try {
    // Acessa via método get a página do google
    await driver.get('https://www.google.com.br/');

    /* 
      Busca na página um elemento pelo atributo name do html(findElement). 
      Depois preenche o input com a palavra selenium e pressiona enter (sendKeys)
    */
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
    // await driver.close(); fecha o navegador
  } catch (e) {
    console.log(e);
  }
  // chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
}

clickingTest();