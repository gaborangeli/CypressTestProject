describe("Testing Aliasing and subcategories", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Clicks on 'Aliasing'", () => {
    cy.homeList().contains("Aliasing").click({ force: true });
    cy.url().should("include", "/commands/aliasing");
  });

  it("Clicks on 'as'", () => {
    cy.homeList().contains("a", /^as$/).click();
    cy.url().should("include", "/commands/aliasing");
  });
});