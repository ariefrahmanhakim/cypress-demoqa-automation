// elements on the web tables page
class WebTablesPage {
  addButton() {
    return cy.get("#addNewRecordButton");
  }

  userForm() {
    return cy.get("#userForm");
  }

  firstNameInput() {
    return cy.get("#firstName");
  }

  lastNameInput() {
    return cy.get("#lastName");
  }

  emailInput() {
    return cy.get("#userEmail");
  }

  ageInput() {
    return cy.get("#age");
  }

  salaryInput() {
    return cy.get("#salary");
  }

  departmentInput() {
    return cy.get("#department");
  }

  submitButton() {
    return cy.get("#submit");
  }

  searchBox() {
    return cy.get("#searchBox");
  }

  dataOnTheTable(data) {
    return cy.contains("table tbody tr", data);
  }

}

export default new WebTablesPage();
