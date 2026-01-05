const{By , Builder,until, Actions} = require("selenium-webdriver")

const{Given , When, Then, After}= require("@cucumber/cucumber")
const assert =require("assert")

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
Given('user launch the url' , async function()
{
    this.driver= await new Builder().forBrowser('chrome').build()
    await this.driver.get('https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com')
    await sleep(2000)
    await this.driver.manage().window().maximize()
})
When('user scroll to drag image',async function()
{
 const el = await this.driver.findElement(By.id("targetDiv"))
 await this.driver.executeScript(
      "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});",el)
      await sleep(3000)
})
Then('user is able to scroll the image to box',async function()
{
const source= await this.driver.findElement(By.xpath('//img[@id="myImage"]'))
const target = await this.driver.findElement(By.xpath('//div[@id="targetDiv"]'))
const actions = this.driver.actions({ async: true });
await actions.dragAndDrop(source,target).perform();
await sleep(3000)
})
