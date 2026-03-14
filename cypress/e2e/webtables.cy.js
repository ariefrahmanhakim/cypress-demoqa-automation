// spec file for web tables page/menu
import bulkCommands from "../tests/bulkCommands";
import webTablesCommands from "../tests/webTablesCommands";

describe("Web Tables Automation", () => {
  it("Register multiple users from CSV", () => {
    cy.fixture("users.csv").then((csvData) => {
      cy.task("parseCSV", csvData).then((users) => {
        webTablesCommands.visit();

        cy.wrap(users).each((user) => {
          webTablesCommands.clickAddButton();
          bulkCommands.fillFormUserOnWebTables(user);
          webTablesCommands.submit();
          webTablesCommands.search(user.email);
          webTablesCommands.verifyUserDisplayed(user.email, {times: 1000});
          webTablesCommands.verifyUserDisplayed(user.firstName);
          webTablesCommands.verifyUserDisplayed(user.lastName);
        });
      });
    });
  });
});
