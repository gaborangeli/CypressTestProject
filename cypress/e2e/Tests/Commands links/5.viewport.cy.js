describe("Testing Viewport and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
  });

  it("Cicks on 'Viewport'", () => {
    cy.homeList().contains("Viewport").click({ force: true });
    cy.url().should("include", "/commands/viewport");
  });

  it("Clicks on 'viewport'", () => {
    cy.homeList().contains("viewport").click();
    cy.url().should("include", "/commands/viewport");
  });
});
