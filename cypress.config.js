const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1200,
  video: false,

  e2e: {
    baseUrl: 'https://www.unilever.com',
    experimentalWebKitSupport: true,
  },
});
