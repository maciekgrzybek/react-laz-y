describe('Basic example', () => {
  beforeEach(() => {
    cy.viewport(1200, 900);
  });

  it('sucessfully loads', () => {
    cy.visit('/');
  });
  it('does not load lazy component when its wrapper is outside of the viewport', () => {
    cy.scrollTo(0, 500);
    cy.wait(1000);
    cy.get('#lazy-yo').should('not.exist');
  });
  it('loads the lazy component when its wrapper scrolls into viewport', () => {
    cy.scrollTo(0, 501);
    cy.get('#lazy-yo').should('to.exist');
  });
});
