const{By , Builder,until} = require("selenium-webdriver")
const{Given , When, Then, After}= require("@cucumber/cucumber")
const assert =require("assert")

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
Given('user go to url' , async function()
{
    this.driver= await new Builder().forBrowser('chrome').build()
    await this.driver.get('https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com')
    await sleep(2000)
    await this.driver.manage().window().maximize()
})
When('user clicks on double-click alert box', async function()
{
 console.log('get into second condition')
 let buttons= await this.driver.findElement(By.id("dblClkBtn"))
 const action = this.driver.actions({async:true})
 await action.move({origin:buttons}).doubleClick().perform()
 await sleep(2000)
})
Then('user gets the alert message', async function()
{
    await sleep(2000)
    const alert = await this.driver.switchTo().alert()
    const alertText= await alert.getText()
    console.log('Alert message', alertText)
    await alert.accept()
  //pass
})
