const { After, Before } = require("@cucumber/cucumber")

Before(async function() {
  console.log("The program starts ")
})
