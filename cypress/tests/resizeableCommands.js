// commands for resizeable page/menu
import resizeablePage from "../pages/resizeablePage";

class resizeableCommands {
  visit() {
    // initial open the page
    cy.visit("https://demoqa.com/resizable");
    // verify the page is loaded
    cy.get("#root", { timeout: 10000 }).should("be.visible");
  }

  resizeBox(targetWidth, targetHeight) {

    resizeablePage.resizeableBox().then(($box) => {
      // Hitung selisih dari ukuran saat ini ke ukuran target.
      const boxRect = $box[0].getBoundingClientRect();
      const deltaWidth = targetWidth - boxRect.width;
      const deltaHeight = targetHeight - boxRect.height;

      resizeablePage.resizeHandle().then(($handle) => {
        // Ambil titik tengah handle sebagai titik awal drag yang stabil.
        const handleRect = $handle[0].getBoundingClientRect();
        const startX = handleRect.left + handleRect.width / 2;
        const startY = handleRect.top + handleRect.height / 2;
        const endX = startX + deltaWidth;
        const endY = startY + deltaHeight;

        cy.wrap($handle).trigger("mousedown", {
          which: 1,
          clientX: startX,
          clientY: startY,
          force: true,
        });

        // Kirim move/up ke document agar event resize tertangkap konsisten di headless.
        cy.document().trigger("mousemove", {
          clientX: endX,
          clientY: endY,
          force: true,
        });

        cy.document().trigger("mouseup", { force: true });
      });
    });
  }

  verifyResize(targetWidth, targetHeight) {
    resizeablePage.resizeableBox().should(($el) => {
      const width = $el.width();
      const height = $el.height();

      // Toleransi 2px untuk menghindari flaky karena perbedaan rendering browser/headless.
      expect(width).to.be.closeTo(targetWidth, 2);
      expect(height).to.be.closeTo(targetHeight, 2);
    });
  }
}

export default new resizeableCommands();
