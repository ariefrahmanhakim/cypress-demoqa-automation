const { defineConfig } = require("cypress");
const neatCSV = require("neat-csv").default;

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        parseCSV(csvData) {
          return neatCSV(csvData);
        },
      });
    },
  },
});
