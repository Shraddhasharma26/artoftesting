const{By , Builder,until} = require("selenium-webdriver")
const{Given , When, Then, After}= require("@cucumber/cucumber")
const { Select } = require('selenium-webdriver');
const assert =require("assert")
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

Given('user clicks on url',async function()
{
     this.driver= await new Builder().forBrowser('chrome').build()
    await this.driver.get('https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com')
    await this.driver.manage().window().maximize()
})
When('user drags to drop down option', async function()
{
    const elements = await this.driver.findElements(By.css("div#commonWebElements p"))
    const el = elements[6]
    await this.driver.executeScript(
  "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});",el)
}) 
Then('user scrolls the drop down options',async function()
{
const dropdown= await this.driver.findElement(By.id('testingDropdown'))
const select= new Select(dropdown)
await select.selectByVisibleText('Manual Testing')
await sleep(3000)
const selectoption= await select.getFirstSelectedOption()
const actual = await selectoption.getText()
const expected= await this.driver.findElement(By.id('manual')).getText()
assert.strictEqual(actual, expected) 

})
