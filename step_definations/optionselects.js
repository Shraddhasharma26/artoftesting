const{By , Builder,until} = require("selenium-webdriver")
const{Given , When, Then, After}= require("@cucumber/cucumber")
const assert =require("assert")

Given('user goes to url', async function()
{
    this.driver= await new Builder().forBrowser('chrome').build()
    await this.driver.get('https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com')
    await this.driver.manage().window().maximize()
})
When('user navigate to radio button', async function()
{
    const elements = await this.driver.findElements(By.css("div#commonWebElements p"))
    const element = elements[4]
    await this.driver.executeScript(
  "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});",element)

})
Then('user selects the option', async function()
{
    await this.driver.findElement(By.id('male')).click()
})