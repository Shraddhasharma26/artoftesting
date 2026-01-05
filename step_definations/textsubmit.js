const{By , Builder,until} = require("selenium-webdriver")
const{Given , When, Then, After}= require("@cucumber/cucumber")
const assert =require("assert")

Given ('user goto the url',async function()
{
    this.driver= await new Builder().forBrowser('chrome').build()
    await this.driver.get('https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com')
    await this.driver.manage().window().maximize()
})
When ('user write in textbox',async function()
{
  //const element = await this.driver.findElement(By.css('#Text'))
  //await this.driver.executeScript(
  //"arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});",element)
  await this.driver.findElement(By.id('fname')).sendKeys('shraddha')
})
Then ('user clicks on submit button', async function()
{
 let button=await this.driver.findElement(By.id('idOfButton'))
 const action = this.driver.actions({async:true})
 await action.move({origin:button}).click().perform()
})