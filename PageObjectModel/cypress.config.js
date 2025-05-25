const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration

 
  e2e: {
 baseUrl: 'https://www.way2automation.com/angularjs-protractor/banking/#/login',
 specPattern: "cypress/e2e/**/*.js",
 video: true,

 reporter: 'mochawesome', // <-- add this line
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-report',
      reportFileName: 'testresults',
      overwrite: false,
      html: false,
      json: true,
      charts:true,
    },

    setupNodeEvents(on, config) {
         on('task', {downloadFile})
      }
    }
})