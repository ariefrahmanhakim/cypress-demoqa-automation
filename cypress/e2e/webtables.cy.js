// spec file for web tables page/menu
import bulkCommands from "../tests/bulkCommands";
import webTablesCommands from "../tests/webTablesCommands";

describe("Web Tables Menu", () => {
  it("[Positive] Register multiple users from CSV", () => {
    cy.fixture("users.csv").then((csvData) => {
      cy.task("parseCSV", csvData).then((users) => {
        webTablesCommands.visit();

        cy.wrap(users).each((user) => {
          webTablesCommands.clickAddButton();
          bulkCommands.fillFormUserOnWebTables(user);
          webTablesCommands.submit();
          webTablesCommands.search(user.email);
          webTablesCommands.verifyUserDisplayed(user.email, { times: 1000 });
          webTablesCommands.verifyUserDisplayed(user.firstName);
          webTablesCommands.verifyUserDisplayed(user.lastName);
        });
      });
    });
  });

  it("[Negative] Register multiple users from CSV without fill Email input", () => {
    cy.fixture("user.csv").then((csvData) => {
      cy.task("parseCSV", csvData).then((users) => {
        webTablesCommands.visit();

        cy.wrap(users).each((user) => {
          webTablesCommands.clickAddButton();
          bulkCommands.fillFormUserOnWebTablesWithoutEmail(user);
          webTablesCommands.submit();
          webTablesCommands.verifyFormInvalidRequiredField();
        });
      });
    });
  });

  it("[Negative] Register multiple users from CSV with fill letter on Age input", () => {
    cy.fixture("user.csv").then((csvData) => {
      cy.task("parseCSV", csvData).then((users) => {
        webTablesCommands.visit();

        cy.wrap(users).each((user) => {
          webTablesCommands.clickAddButton();
          bulkCommands.fillFormUserOnWebTablesInvalidAge(user);
          webTablesCommands.submit();
          webTablesCommands.verifyFormInvalidRequiredField();
        });
      });
    });
  });

  it("[Negative] Register multiple users from CSV with fill blank on Salary input", () => {
    cy.fixture("user.csv").then((csvData) => {
      cy.task("parseCSV", csvData).then((users) => {
        webTablesCommands.visit();

        cy.wrap(users).each((user) => {
          webTablesCommands.clickAddButton();
          bulkCommands.fillFormUserOnWebTablesWithoutSalary(user);
          webTablesCommands.submit();
          webTablesCommands.verifyFormInvalidRequiredField();
        });
      });
    });
  });
});
