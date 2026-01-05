const{By , Builder,until} = require("selenium-webdriver")
const{Given , When, Then, After}= require("@cucumber/cucumber")
const assert =require("assert")

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
Given('user launch url', async function()
{
    this.driver = await new Builder().forBrowser('chrome').build()
    this.driver.get('https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com')
    await this.driver.manage().window().maximize()
})

When('user scrolls to checkbox', async function()
{
    const elements = await this.driver.findElements(By.css("div#commonWebElements p"))
    
    console.log(elements.length)
    const el =elements[5]
    await this.driver.executeScript(
      "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});",el)
    await sleep(3000)
})
Then('user is able to select any option', async function()
{
  await this.driver.findElement(By.xpath("//input[@value='Automation']")).click()
  await sleep(3000)
})