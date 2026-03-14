// commands for droppable page/menu
import droppablePage from "../pages/droppablePage";

class droppableCommands {
  visit() {
    // initial open the page
    cy.visit("https://demoqa.com/droppable");
    // verify the page is loaded
    cy.get("#root", { timeout: 10000 }).should("be.visible");
  }

  dragAndDrop() {
    // This page uses jQuery UI internally.
    // Instead of simulating unstable mouse moves, we call the jQuery UI drop callback directly.
    droppablePage.dragMe().scrollIntoView().should("be.visible").filter(":visible").first();
    droppablePage.dropHere().scrollIntoView().should("be.visible").filter(":visible").first();

    cy.window({ timeout: 10000 })
      .should((windowObject) => {
        // Wait until jQuery and jQuery UI droppable are fully loaded.
        expect(windowObject.jQuery, "jQuery loaded").to.be.a("function");
        expect(windowObject.jQuery.fn.droppable, "jQuery UI droppable plugin loaded").to.be.a("function");
      })
      .then((windowObject) => {
        const jqueryObject = windowObject.jQuery;
        // Pick only visible draggable/dropzone in case multiple tabs are rendered.
        const draggedElement = jqueryObject(droppablePage.dragMeSelector()).first();
        const dropZone = jqueryObject(droppablePage.dropHereSelector()).first();
        const dropHandler = dropZone.droppable("option", "drop");

        expect(dropHandler, "drop handler exists").to.be.a("function");

        const dropOffset = dropZone.offset();
        const dragOffset = draggedElement.offset();

        // Move the draggable element near the drop zone before triggering drop callback.
        draggedElement.css({
          position: "relative",
          left: dropOffset.left - dragOffset.left,
          top: dropOffset.top - dragOffset.top,
        });

        // Trigger the same callback jQuery UI uses when a successful drop happens.
        dropHandler.call(dropZone[0], jqueryObject.Event("drop"), {
          draggable: draggedElement,
          helper: draggedElement,
          offset: draggedElement.offset(),
          position: draggedElement.position(),
        });
      });
  }

  verifyDragAndDrop() {
    // verify the drop action is successful
    droppablePage.dropHereValidation().should("be.visible").filter(":visible").first();;
    droppablePage.droppedText().should("have.text", "Dropped!");
    cy.log("Perform drag and drop action");
  }
}

export default new droppableCommands();
