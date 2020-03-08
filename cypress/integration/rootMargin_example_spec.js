describe("Basic example", () => {
  beforeEach(() => {
    cy.viewport(1200, 900);
  });

  it("sucessfully loads", () => {
    cy.visit("/root-margin");
  });
  it("does not load lazy component when its wrapper is outside of the viewport", () => {
    cy.scrollTo(0, 100);
    cy.wait(1000);
    cy.get("#lazy-inner-wrapper").should("not.exist");
  });
  it("loads the lazy component when its wrapper scrolls into viewport", () => {
    cy.scrollTo(0, 101);
    cy.get("#lazy-inner-wrapper").should("to.exist");
  });
});
