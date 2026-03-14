// commands for web tables page/menu
import WebTablesPage from "../pages/webTablesPage";

class webTablesCommands {
  visit() {
    // initial open the page
    cy.visit("https://demoqa.com/webtables");
    // verify the page is loaded
    cy.get("#root", { timeout: 10000 }).should("be.visible");
  }

  clickAddButton() {
    // click add button
    WebTablesPage.addButton().should("be.visible").scrollIntoView().click();
    // verify form is visible
    WebTablesPage.userForm().should("be.visible");
  }

  fillFirstName(firstName) {
    // fill first name
    WebTablesPage.firstNameInput().should("be.visible").type(firstName);
  }

  fillLastName(lastName) {
    // fill last name
    WebTablesPage.lastNameInput().should("be.visible").type(lastName);
  }

  fillEmail(email) {
    // fill email
    WebTablesPage.emailInput().should("be.visible").type(email);
  }

  fillAge(age) {
    // fill age
    WebTablesPage.ageInput().should("be.visible").type(age);
  }

  fillSalary(salary) {
    // fill salary
    WebTablesPage.salaryInput().should("be.visible").type(salary);
  }

  fillDepartment(department) {
    // fill department
    WebTablesPage.departmentInput().should("be.visible").type(department);
  }

  submit() {
    // click submit button
    WebTablesPage.submitButton().should("be.visible").click();
  }

  search(keyword) {
    // search for a keyword
    WebTablesPage.searchBox().should("be.visible").clear().type(keyword);
  }

  verifyUserDisplayed(data) {
    // verify user is displayed on the table
    WebTablesPage.dataOnTheTable(data).should("be.visible");
  }
}

export default new webTablesCommands();
