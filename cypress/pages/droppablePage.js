// elements on the droppable page
class DroppablePage {
  dragMeSelector() {
    return "#draggable:visible";
  }

  dropHereSelector() {
    return "#droppable:visible";
  }

  dragMe() {
    return cy.get("#draggable")
  }

  dropHere() {
    return cy.get("#droppable")
  }

  dropHereValidation() {
    return cy.get("#droppable.ui-state-highlight")
  }

  droppedText() {
    return cy.get("#droppable").find("p");
  }
}
export default new DroppablePage();
