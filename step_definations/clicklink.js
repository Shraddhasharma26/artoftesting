const{By , Builder,until} = require("selenium-webdriver")
const{Given , When, Then, After}= require("@cucumber/cucumber")
const assert =require("assert")

Given('user goto the site', async function()
{
    this.driver= await new Builder().forBrowser('chrome').build()
    await this.driver.get('https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com')
    await this.driver.manage().window().maximize()
});

When('user scroll down till link', async function()
{
  const element = await this.driver.findElement(By.linkText('This is a link'))
  await this.driver.executeScript(
  "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});",element)
})

When('user clicks on link',async function()
{
 await this.driver.wait(until.elementLocated(By.linkText('This is a link')),5000)
 await this.driver.findElement(By.linkText('This is a link')).click()
});

Then('user link opens',async function()
{
  const actualUrl = await this.driver.getCurrentUrl();
  console.log(actualUrl)
  const expectedUrl = 'https://artoftesting.com/samplesiteforselenium';
  assert.strictEqual(actualUrl, expectedUrl)
})

After(async function() {
  // Quit driver only once after all scenarios
  if(this.driver) {
    await this.driver.quit()
  }
})