const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    watchForFileChanges: false,
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    //Enable Studio-Record Test
    experimentalStudio: true,
    //To clean assets such as screenshots or videos
    trashAssetsBeforeRuns: true,
  },
});
