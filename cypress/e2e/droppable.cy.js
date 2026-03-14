// spec file for droppable page/menu
import droppableCommands from "../tests/droppableCommands";

describe("Droppable Menu", () => {
  it("[Positive] user can drag and drop successfully", () => {
    droppableCommands.visit();
    droppableCommands.dragAndDrop();
    droppableCommands.verifyDragAndDrop();
  });
});
