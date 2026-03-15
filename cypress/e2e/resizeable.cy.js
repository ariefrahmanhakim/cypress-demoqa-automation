import resizeableCommands from "../tests/resizeableCommands";

describe("Resizable Menu", () => {
  const targetWidth = 400;
  const targetHeight = 200;

  it("[Positive] user can resize box to 400x200", () => {
    resizeableCommands.visit();
    resizeableCommands.resizeBox(targetWidth, targetHeight);
    resizeableCommands.verifyResize(targetWidth, targetHeight);
  });
});
