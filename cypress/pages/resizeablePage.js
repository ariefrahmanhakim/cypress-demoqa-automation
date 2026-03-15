// elements on the resizeable page
class resizeablePage {

  resizeableBox() {
    return cy.get("#resizableBoxWithRestriction")
  }

  resizeHandle() {
    return cy.get("#resizableBoxWithRestriction .react-resizable-handle")
  }

}
export default new resizeablePage();
