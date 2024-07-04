const {Builder,By} = require('selenium-webdriver');

const driver = new Builder().forBrowser('firefox').build();

async function login() {
    try {
       await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration');
       await driver.findElement(By.id('email')).sendKeys('example@gmail.com');
       await driver.findElement(By.id('password')).sendKeys('123456');
       await driver.findElement(By.id('submit')).click();
    } catch (error) {
        console.log(error);
    }
}

login();